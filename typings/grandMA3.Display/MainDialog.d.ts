type MainDialogProps = ObjProps & {};

type MainDialog = UILayoutGrid &
	MainDialogProps & {
		Close(): void;
		CloseCancel(): void;
	};
