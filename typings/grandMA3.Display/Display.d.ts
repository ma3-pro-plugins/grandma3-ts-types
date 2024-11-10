type Display = GenericObj &
	UILayoutGrid & {
		CmdLineSection: CmdLineSection;
		MainMenuCnt: MainMenuCnt;
		ScrollIndicatorBox: ScrollIndicatorBox;
		ViewBar: ViewBar;
		EncoderBarContainer: EncoderBarContainer;
		MainDialog: PlaceHolder;
		MainOverlay: MainOverlay;
		FullScreen: FullScreen;
		ScreenOverlay: ScreenOverlay;
		ModalOverlay: ModalOverlay;
		w: number;
		h: number;
	} & {
		scaleRatio: DisplayScaleRatio;
	};
type DisplayScaleRatio = '0.5x' | '0.75x' | '1x' | '1.25x' | '1.5x' | '1.75x' | '2x' | '2.5x';
type CmdLineSection = GenericObj;
type MainMenuCnt = GenericObj;
type ScrollIndicatorBox = GenericObj;
type ViewBar = GenericObj;
type EncoderBarContainer = GenericObj;
type MainOverlay = GenericObj;
type FullScreen = GenericObj;
type ScreenOverlay = Obj<Display, any> &
	UILayoutGrid & {
		ClearUIChildren(): void;
		Close(): void;
	};
type ModalOverlay = Obj<Display, any> &
	UILayoutGrid & {
		ClearUIChildren(): void;
	};
