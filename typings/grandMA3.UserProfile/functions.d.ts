type UserProfile = Obj<UserProfiles, any> &
	any[] & { [index: string]: any } & {
		KeyboardShortCuts: KeyboardShortCuts
		ScreenConfigurations: ScreenConfigurations;
		LayoutElementDefaultsCollect: LayoutElementDefaultsCollect;
		Name: string;
	};
