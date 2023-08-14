type IndicatorButtonProps = ButtonProps & {
	colorIndicator: string;
	textLeftCorner: string;
};
type IndicatorButton = UIObject & IndicatorButtonProps & ButtonSignals;
