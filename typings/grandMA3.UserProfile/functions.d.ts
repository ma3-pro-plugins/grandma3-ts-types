type UserProfile = Obj<UserProfiles, any> &
	any[] & { [index: string]: any } & {
		ScreenConfigurations: ScreenConfigurations;
		LayoutElementDefaultsCollect: LayoutElementDefaultsCollect;
		Name: string;
	};
