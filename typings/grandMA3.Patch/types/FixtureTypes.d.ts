type FixtureTypes = Obj<Patch, FixtureTypeObj> &
	FixtureTypeObj[] & { [index: string]: FixtureTypeObj };

type FixtureTypeObj = Obj<FixtureTypes, any> &
	any[] & { [index: string]: any } & {
		DMXModes: DMXModes;
		Wheels: Wheels;
		AttributeDefinitions: AttributeDefinitions;
	};

type DMXModes = Obj<FixtureTypeObj, DMXMode> &
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

type Wheels = Obj<FixtureTypeObj, Wheel> & Wheel[] & { [index: string]: Wheel };

type Wheel = Obj<Wheels, Slot>;

type Slot = Obj<Wheel, any> & {
	image: GoboImage;
};

type AttributeDefinitions = Obj<FixtureTypeObj, any> & {
	FeatureGroups: FeatureGroups;
	Attributes: Attributes;
};

type FeatureGroups = Obj<AttributeDefinitions, FeatureGroup>;
type FeatureGroup = Obj<FeatureGroups, Feature> & { [key: string]: Feature };

type Feature = Obj<FeatureGroup, any> & {
};

/**
 * NOTE: Using attributes.Children() doesn't give all attributes. 
 * Also we access the attributes by name attribute['ColorRGB_R'], 
 * since not ALL attributes appear this way.
 * We need to get attributes with GetAttributeByUIChannel().
 * 
 * GetAttributeCount() is not the same as GetUIChannelCount().
 */
type Attributes = Obj<AttributeDefinitions, any> & { [key: string]: Attribute };

type Attribute = Obj<Attributes, any> & {
	Feature: Feature;
	Color: any;
};
