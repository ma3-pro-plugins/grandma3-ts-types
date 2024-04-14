type UserProfile = Obj<UserProfiles, any> &
	any[] & { [index: string]: any } & {
		Views: Views
		KeyboardShortCuts: KeyboardShortCuts
		ScreenConfigurations: ScreenConfigurations;
		LayoutElementDefaultsCollect: LayoutElementDefaultsCollect;
		UserAttributePreferences: UserAttributePreferences;
		Name: string;
	};

type Views = Obj<UserProfiles, View>;

type View = Obj<Views, WindowBase>;

type UserAttributePreferences = Obj<UserProfile, UserAttribute> 

type UserAttribute = Obj<UserAttributePreferences, void> & {
	EncoderResolution: Enums.AttriebuteEncoderResolution
	
};