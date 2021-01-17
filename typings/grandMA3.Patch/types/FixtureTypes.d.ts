type FixtureTypes = Obj<Patch, FixtureType> & FixtureType[] & { [index: string]: FixtureType };

type FixtureType = Obj<FixtureTypes, any> &
	any[] & { [index: string]: any } & {
		DMXModes: DMXModes;
	};

type DMXModes = Obj<FixtureType, DMXMode> &
	DMXMode[] & { [index: string]: DMXMode } & {
		Default: DMXMode;
	};

type DMXMode = Obj<DMXModes, any> &
	any[] & { [index: string]: any } & {
		DMXChannels: DMXChannels;
	};

type DMXChannels = Obj<DMXMode, DMXChannel> & DMXChannel[] & { [index: string]: DMXChannel };

type DMXChannel = Obj<DMXChannels, LogicalChannel> &
	LogicalChannel[] & { [index: string]: LogicalChannel } & {
		Highlight: number;
	};

type LogicalChannel = Obj<DMXChannel, any> & any[] & { [index: string]: any };
