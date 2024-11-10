type SwipeButton = UIObject & {
	textShadow: number;
	hasHover: YesNo;
	text: string;
	// textColor: string
	font: Font;
	textAlignmentH: AlignmentH;
	pluginComponent: GenericObj;
	clicked: SignalId;
	focus?: 'InitialFocus';
	toolTip: string;
	enabled: YesNo;
	keyUp: string; // Signal Function Name
};
