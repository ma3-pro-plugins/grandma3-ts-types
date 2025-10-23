type Patch = Obj<ShowData, any> &
	any[] & { [index: string]: any } & {
		FixtureTypes: FixtureTypes;
	};

type LivePatch = Obj<ShowData, any> &
	any[] & { [index: string]: any } & {
		AttributeDefinitions: AttributeDefinitions;
		FixtureTypes: FixtureTypes;
		Stages: Stages;
		UIChannels: UIChannels;
	};

type Stages = Obj<LivePatch | Patch, Stage> & { [index: number]: Stage };

type Stage = Obj<Stages, any> & {
	note: string;
	Spaces: Spaces;
	Fixtures: Fixtures;
};
type Spaces = Obj<Stage, any>;
type Fixtures = Obj<Stage, Fixture>;
type DMXMultiAddrString =
	| DMXAddrString
	| `${DMXAddrString},${DMXAddrString}`
	| `${DMXAddrString},${DMXAddrString},${DMXAddrString}`; // May be more ?
type Fixture = Obj<Fixtures, Fixture | SubFixture> & {
	/**
	 * If the fixture has a CID, then the index is the CID.
	 * If not, it will be the 1-based index of the fixture within the Stage.
	 */
	index: number;
	fid: number | 'None';
	cid: number | 'None';
	fixtureType: FixtureTypeObj;
	/**
	 * I saw one case where the Universal fixture has a child of class Fixture (Not Subfixture),
	 * and it doesn't have any mode or modeDirect.
	 */
	mode?: DMXMode;
	modeDirect?: DMXMode;
	patch: DMXMultiAddrString | '';
};

type SubFixture = Obj<Fixtures, SubFixture> & {
	fixture: Fixture;
	stage: Stage;
};

type UIChannels = Obj<LivePatch | Patch, UIChannel> & UIChannel[];

/**
 * This is a LUA table (not user_data type)
 */
type UIChannel = {
	logical_channel: LogicalChannel;
	attr_index: number;
	rt_index: number;
	subAttribute: AttributeName;
};
