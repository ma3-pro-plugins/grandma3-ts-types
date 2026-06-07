type IndicatorControlProps = ButtonProps & {
	colorIndicator: string | MAColor;
	indicatorIcon: 'DialogButtonIcon';
	indicatorIconAlignmentV: AlignmentV;
	indicatorIconColor: string | MAColor;
	textLeftCorner: string;
};
type IndicatorControl = UIObject & IndicatorControlProps & ButtonSignals;
