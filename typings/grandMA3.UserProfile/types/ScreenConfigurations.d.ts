type ScreenConfigurations = Obj<UserProfile, ScreenConfiguration> &
	ScreenConfiguration[] & {
		Default: ScreenConfiguration;
		[index: string]: ScreenConfiguration;
	};

type ScreenConfiguration = Obj<ScreenConfigurations, ScreenContents | ViewButtonScreens> & {
	ScreenContents: ScreenContents;
	'ViewButtonScreens 2': ViewButtonScreens;
};

type ScreenNumber = number;
type ScreenContentKey = `ScreenContent ${ScreenNumber}`;
type ScreenContents = Obj<ScreenConfiguration, ScreenContent> & Record<number, ScreenContent>;

type ScreenContent = Obj<ScreenContents, WindowBase>;

type WindowBaseProps = ObjProps & {
	appearance: Obj<any, any>;
	minH: number;
	minW: number;
	note: string;
	x: number;
	y: number;
	w: number;
	h: number;
	display: number;
	snapToBlockSize: boolean;
	presetPoolType: number;
};

interface WindowBase extends Obj<ScreenContent | View, any, WindowBaseProps>, WindowBaseProps {
	WindowAppearance: WindowAppearance;
	WindowScrollPositions: WindowScrollPositions;
}

type WindowAppearance = Obj<WindowBase, undefined>;
type WindowScrollPositions = Obj<WindowBase, undefined> & {
	/**
	 * A string with 2 integer numbers separated by a comma.
	 * The first number is the vertical scroll position.
	 * The second number is the vertical cursor position.
	 */
	scrollV: string;
	/**
	 * A string with 2 integer numbers separated by a comma.
	 * The first number is the horizontal scroll position.
	 * The second number is the horizontal cursor position.
	 */
	scrollH: string;
};

interface WindowLayoutView extends WindowBase {
	name: 'WindowLayoutView';
	// LayoutViewSettings: LayoutViewSettings; // Sometimes the name could be "LayoutViewSettings 1", but it should be always first
	[1]: LayoutViewSettings;
}

interface LayoutViewSettingsProps {
	Layout: Layout;
	FitType: 'Elements' | 'Canvas' | 'Both';
	ShowTitleBar: boolean;
	AutoFit: boolean;
	PaddingLeft: number;
	PaddingRight: number;
	PaddingBottom: number;
	PaddingTop: number;
}
type LayoutViewSettings = Obj<WindowBase, undefined> & LayoutViewSettingsProps;

type ViewButtonScreenKey = `ViewButtonScreen ${number}`;
type ViewButtonScreens = Obj<ScreenConfiguration, ViewButtonScreen> &
	Record<ViewButtonScreenKey, ViewButtonScreen>;

type ViewButtonScreen = Obj<ViewButtonScreens, ViewButton>;

type ViewButton = Obj<ViewButtonScreen, undefined>;

interface WindowEncoderBar extends WindowBase {
	name: 'WindowEncoderBar';
	EncoderBarWindowSettings: EncoderBarWindowSettings;
}
interface EncoderBarWindowSettingsProps {
	fadeEncoder: boolean;
}
type EncoderBarWindowSettings = Obj<WindowBase, undefined> & EncoderBarWindowSettingsProps;
