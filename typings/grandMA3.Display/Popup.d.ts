type OverlayBaseProps = ObjProps & {
	autoClose: boolean;
};

type OverlayBase<Clazz extends string = string> = Obj<PlaceHolder, any, OverlayBaseProps, Clazz> &
	UILayoutGrid &
	OverlayBaseProps & {
		3: ModalPlaceholder;
		4: PopupPlaceholder;
	} & {
		Close(): void;
		CloseCancel(): void;
	};

type Popup = OverlayBase<'Popup'>;
type ShadedOverlay = OverlayBase<'ShadedOverlay'>;
type MainDialog = OverlayBase<'MainDialog'>;

type OverlayCloseCallback = (
	this: void,
	overlay: Popup,
	modalResult: Enums.ModalResult,
	modalValue: any,
	ctxNext: any,
) => void;
