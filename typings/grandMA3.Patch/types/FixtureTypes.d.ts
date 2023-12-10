type FixtureTypes = Obj<Patch, FixtureType> & FixtureType[] & { [index: string]: FixtureType };

type FixtureType = Obj<FixtureTypes, any> &
	any[] & { [index: string]: any } & {
		DMXModes: DMXModes;
		Wheels: Wheels;
		AttributeDefinitions: AttributeDefinitions;
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

type DMXChannelProps = ObjProps & {
	Highlight: number;
};

type DMXChannel = Obj<DMXChannels, LogicalChannel, DMXChannelProps> & {
	[index: string]: LogicalChannel;
};

type LogicalChannelProps = ObjProps & {
	attribute: string;
};
type LogicalChannel = Obj<DMXChannel, ChannelFunction, LogicalChannelProps> &
	LogicalChannelProps & {
		ChannelFunction: ChannelFunction;
	};

type ChannelFunctionProps = ObjProps & {
	attribute: string;
};
type ChannelFunction = Obj<LogicalChannel, ChannelSet, ChannelFunctionProps> &
	ChannelFunctionProps & {
		wheel: Wheel;
	};

type ChannelSetProps = ObjProps & {
	DMXfrom: number;
	DMXto: number;
	wheelSlotIndex: number;
};
type ChannelSet = Obj<ChannelFunction, any, ChannelSetProps> & ChannelSetProps;

type Wheels = Obj<FixtureType, Wheel> & Wheel[] & { [index: string]: Wheel };

type Wheel = Obj<Wheels, Slot>;

type Slot = Obj<Wheel, any> & {
	image: GoboImage;
};

type AttributeDefinitions = Obj;
