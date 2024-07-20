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

type Stages = Obj<LivePatch | Patch, Stage>;

type Stage = Obj<Stages, any> & {
	Spaces: Spaces;
	Fixtures: Fixtures;
};
type Spaces = Obj<Stage, any>;
type Fixtures = Obj<Stage, Fixture>;
type Fixture = Obj<Fixtures, SubFixture> & {
	fid: number;
	fixtureType: FixtureTypeObj;
	mode: DMXMode;
	modeDirect: DMXMode;
};

type SubFixture = Obj<Fixtures, SubFixture> & {
	fixture: Fixture;
	stage: Stage;
};

type UIChannels = Obj<LivePatch | Patch, UIChannel> & UIChannel[];

type UIChannel = {
	logical_channel: LogicalChannel;
	attr_index: number;
};
