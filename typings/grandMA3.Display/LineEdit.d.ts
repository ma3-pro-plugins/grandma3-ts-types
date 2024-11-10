type LineEditSignals = UIObjectSignals & {
	textChanged: SignalId;
	clear: SignalId;
	charInput: SignalId;
	onWrongChar: SignalId;
	setText: SignalId;
};

type LineEditProps = UIObjectProps & {
	textAutoAdjust: YesNo;
	prompt: string;
	message: string;
	property: string;

	/** Some kind of path? */
	target: string;

	textChangeOnEnter: 1 | 0;
	texture: string | `cornder${number}`;
	iconAlignmentH: AlignmentH;
	iconAlignmentV: AlignmentV;
	showKeyboardButton: YesNo;
	keyboardIconAlignmentH: AlignmentH;
	signalValue: number;

	/** Some kind of path? */
	content: string;
	forceCursor: YesNo;

	// These are common to Button
	textShadow: number;
	hasHover: YesNo;
	text: string;
	maxTextLength: number;
	/** Allows characters */
	filter: string;
	vkPluginName: VKPluginName;
	vkTitleHint: string;
	// textColor: string
	font: Font;
	textAlignmentH: AlignmentH;
	pluginComponent: LuaComponent;
	focus: Focus;

	toolTip: string;
	enabled: YesNo;
};
type LineEdit = UIObject &
	LineEditSignals &
	LineEditProps & {
		SelectAll(): void;
		DeSelect(): void;
	};
