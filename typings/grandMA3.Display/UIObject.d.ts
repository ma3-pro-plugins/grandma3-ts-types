type UIObjectProps = ObjProps & {
	// Layout Props
	anchors: Anchors;
	backColor: MAColor | string;
	padding: Padding;
	margin: Margin;
	maxSize: MAUISize;
	minSize: MAUISize;
	h: Height;
	w: Width;
	x: number;
	y: number;
	contentDriven: YesNo;
	contentWidth: YesNo;
	contentHeight: YesNo;
	forceContentMin: YesNo;
	separator: YesNo;

	// Appearance Props
	focus: Focus;
	hasFocus: YesNo;
	hideFocusFrame: YesNo;
	interactive: YesNo;
	visible: BooleanString;
	mixInBackColor: Obj;

	// Text Props
	alignmentH: AlignmentH;
	alignmentV: AlignmentV;
	font: Font;
	hasHover: YesNo;
	icon: string; // texture name
	iconColor: MAColor;
	iconAlignmentH: AlignmentH;
	iconAlignmentV: AlignmentV;
	text: string;
	textAlignmentH: AlignmentH;
	textColor: MAColor | string;
	textShadow: number;
	textShadowColor: Obj;
	/**
	 * Scales down the text to fit the box. Also enabled text wrapping.
	 */
	textAutoAdjust: YesNo;
	texture: string;
	transparent: YesNo;
};

type UIObjectSignals = {
	onLoad: SignalId;
	onVisible: SignalId;
	keyDown: SignalId;
	keyUp: SignalId;
	doubleClicked: SignalId;
	execute: SignalId;
	clicked: SignalId;
	focusGet: SignalId;
	focusLost: SignalId;
};
type UIObject = Obj &
	UIObjectProps &
	UIObjectSignals & {
		readonly absRect: Rect;
		readonly absClientRect: Rect;
		GetOverlay(): Popup;
	};

type ScrollBox = Obj &
	UIObjectProps &
	UIObjectSignals & {
		readonly absRect: Rect;
		readonly absClientRect: Rect;
		GetOverlay(): Popup;
	};
