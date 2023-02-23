type Display = Obj<any, any> & UIComponent & {
	Rows: Rows;
	Columns: Columns;
	CmdLineSection: CmdLineSection
	MainMenuCnt: MainMenuCnt
	ScrollIndicatorBox: ScrollIndicatorBox
	ViewBar: ViewBar
	EncoderBarContainer: EncoderBarContainer
	MainDialog: MainDialog
	MainOverlay: MainOverlay
	FullScreen: FullScreen
	ScreenOverlay: ScreenOverlay
	ModalOverlay: ModalOverlay
};

type Rows = GenericObj
type Columns = GenericObj
type CmdLineSection = GenericObj
type MainMenuCnt = GenericObj
type ScrollIndicatorBox = GenericObj
type ViewBar = GenericObj
type EncoderBarContainer = GenericObj
type MainDialog = GenericObj
type MainOverlay = GenericObj
type FullScreen = GenericObj
type ScreenOverlay = Obj<Display, any> & {
	ClearUIChildren(): void
}
type ModalOverlay = GenericObj

type UIComponent = Rect & {
	absRect: Rect
	absClientRect: Rect
}