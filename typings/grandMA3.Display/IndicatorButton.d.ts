type IndicatorButtonProps = ButtonProps & {
	colorIndicator: string | MAColor;
	textLeftCorner: string;
};
type IndicatorButton = UIObject & IndicatorButtonProps & ButtonSignals;
