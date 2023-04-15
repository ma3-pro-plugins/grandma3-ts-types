type UserProfile = Obj<UserProfiles, any> &
	any[] & { [index: string]: any } & {
		Views: Views
		KeyboardShortCuts: KeyboardShortCuts
		ScreenConfigurations: ScreenConfigurations;
		LayoutElementDefaultsCollect: LayoutElementDefaultsCollect;
		Name: string;
	};

type Views = Obj<UserProfiles, View>;

type View = Obj<Views, WindowBase>;