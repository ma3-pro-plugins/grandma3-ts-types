type PlaceHolderProps = ObjProps & {};

type PlaceHolder = Obj &
	UIObject &
	PlaceHolderProps & {
		Close(this: void): void;
		ScrollBarH: ScrollBarH;
		ScrollBarV: ScrollBarV;
	};

type ModalPlaceholder = PlaceHolder;
type PopupPlaceholder = PlaceHolder;
