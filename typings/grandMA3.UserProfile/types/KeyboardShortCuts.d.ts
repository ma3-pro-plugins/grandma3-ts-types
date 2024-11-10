type KeyboardShortCutsProps = ObjProps & {
	keyboardShortcutsActive: boolean;
};

type KeyboardShortCuts = Obj<UserProfile, any> & KeyboardShortCutsProps;
