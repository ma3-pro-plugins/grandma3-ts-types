type Patch = Obj<ShowData, any> &
	any[] & { [index: string]: any } & {
		FixtureTypes: FixtureTypes;
	};

type LivePatch = Obj<ShowData, any> &
	any[] & { [index: string]: any } & {
		AttributeDefinitions: AttributeDefinitions;
		FixtureTypes: FixtureTypes;
		Stages: Stages;
	};

type Stages = Obj<LivePatch | Patch, Stage>;

type Stage = Obj<Stages, any> & {
	Spaces: Spaces;
	Fixtures: Fixtures;
};
type Spaces = Obj<Stage, any>;
type Fixtures = Obj<Stage, Fixture>;
type Fixture = Obj<Fixtures, any> & {
	fid: number;
	fixtureType: FixtureTypeObj;
	mode: DMXMode;
	modeDirect: DMXMode;
};
