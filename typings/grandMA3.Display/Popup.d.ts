type PopupProps = ObjProps & {
	autoClose: boolean;
};

type Popup = UILayoutGrid &
	PopupProps & {
		Close(): void;
		CloseCancel(): void;
	};

type OverlayCloseCallback = (
	this: void,
	overlay: Popup,
	modalResult: Enums.ModalResult,
	modalValue: any,
	ctxNext: any,
) => void;
