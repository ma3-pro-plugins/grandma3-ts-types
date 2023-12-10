type Patch = Obj<ShowData, any> &
	any[] & { [index: string]: any } & {
		FixtureTypes: FixtureTypes;
	};

type LivePatch = Obj<ShowData, any> &
	any[] & { [index: string]: any } & {
		FixtureTypes: FixtureTypes;
	};
