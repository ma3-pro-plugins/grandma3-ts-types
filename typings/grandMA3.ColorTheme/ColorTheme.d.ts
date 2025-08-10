type ColorTheme = Obj<Root, ColorDefCollect | ColorGroups> & {
	ColorDefCollect: ColorDefCollect;
	ColorGroups: ColorGroups;
};

type ColorGroups = Obj<ColorTheme, ColorGroup> & {
	Global: ColorGroupGlobal;
	PoolDefault: ColorGroupPoolDefault;
	[name: string]: ColorGroup;
};

type ColorGroup = Obj & {
	[name: string]: MAColor;
};

type MAColor = Obj & {
	/**
	 * HEX string without a leading '#'
	 * HEX string must include 8 characters
	 */
	RGBA: string;
};

type ColorGroupPoolDefault= ColorGroup & {
	// TODO: Add all pools
	MATricks: MAColor;
}

type ColorGroupGlobal = ColorGroup & {
	Disabled: MAColor;
	Focus: MAColor;
	AnimatedFocus1: MAColor;
	AnimatedFocus2: MAColor;
	Hover: MAColor;
	Pressed: MAColor;
	Selected: MAColor;
	SelectedInverted: MAColor;
	SelectedEdge: MAColor;
	InvalidGridPosition: MAColor;
	PartlySelected: MAColor;
	SelectedPreset: MAColor;
	PartlySelectedPreset: MAColor;
	Transparent: MAColor;
	Transparent25: MAColor;
	Transparent50: MAColor;
	Transparent75: MAColor;
	Background: MAColor;
	BackgroundSelected: MAColor;
	BackgroundSelectedInverted: MAColor;
	ButtonBackground: MAColor;
	ButtonBackgroundDarker: MAColor;
	Default: MAColor;
	Inactive: MAColor;
	Bright: MAColor;
	Shadow: MAColor;
	Lightened: MAColor;
	Darkened: MAColor;
	Text: MAColor;
	LabelText: MAColor;
	WarningText: MAColor;
	ErrorText: MAColor;
	AlertText: MAColor;
	SuccessText: MAColor;
	Neutral: MAColor;
	Collected: MAColor;
	UserChanged: MAColor;
};
