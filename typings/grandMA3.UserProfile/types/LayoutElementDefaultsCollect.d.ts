type LayoutElementDefaultsCollect = Obj<UserProfile, LayoutDefault> &
	LayoutDefault[] & { [index: string]: LayoutDefault };

type LayoutDefault = Obj<LayoutElementDefaultsCollect, null> &
	null[] & { [index: string]: null } & {
		ElementType: string;
		Action: string;
	};
