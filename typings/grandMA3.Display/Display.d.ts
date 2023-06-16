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
	};

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
