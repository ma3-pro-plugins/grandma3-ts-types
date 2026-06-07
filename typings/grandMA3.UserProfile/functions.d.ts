type UserProfileProps = ObjProps & {
	encoderUIStyle: Enums.EncoderUIStyle;
	autoRemoveGaps: boolean;
};

type UserProfile = Obj<UserProfiles, any, UserProfileProps> &
	any[] & { [index: string]: any } & {
		Environments: Environments;
		EncoderBarPool: EncoderBarPool;
		Cameras: Cameras;
		Views: Views;
		StorePreferences: StorePreferences;
		ExecutorFixation: ExecutorFixation;
		SpecialExecutorPages: SpecialExecutorPages;
		TemporaryWindowSettings: TemporaryWindowSettings;
		SmartViewPool: SmartViewPool;
		Variables: UserProfileVariables;
		ScreenConfigurations: ScreenConfigurations;
		LayoutElementDefaultsCollect: LayoutElementDefaultsCollect;
		KeyboardShortCuts: KeyboardShortCuts;
		UserAttributePreferences: UserAttributePreferences;
		RenderQualities: RenderQualities;
		GridColumnRegistry: GridColumnRegistry;
		StatusCenter: StatusCenter;
		PreviewSettings: PreviewSettings;
		MessageNotificationSettings: MessageNotificationSettings;
		Name: string;
	};

declare namespace MA3_V2_3 {
	type UserProfile = Obj<UserProfiles, any, UserProfileProps> &
		any[] & { [index: string]: any } & {
			Environments: Environments;
			EncoderBarPool: EncoderBarPool;
			Cameras: Cameras;
			WindowTypes: WindowTypes;
			Views: Views;
			StorePreferences: StorePreferences;
			ExecutorFixation: ExecutorFixation;
			SequenceSelection: SequenceSelection;
			SpecialExecutorPages: SpecialExecutorPages;
			TemporaryWindowSettings: TemporaryWindowSettings;
			SmartViewPool: SmartViewPool;
			Variables: UserProfileVariables;
			ScreenConfigurations: ScreenConfigurations;
			LayoutElementDefaultsCollect: LayoutElementDefaultsCollect;
			KeyboardShortCuts: KeyboardShortCuts;
			UserAttributePreferences: UserAttributePreferences;
			RenderQualities: RenderQualities;
			Collection: Collection;
			GridColumnRegistry: GridColumnRegistry;
			StatusCenter: StatusCenter;
			Name: string;
		};
}

type EncoderBarPool = Obj<UserProfile, any>;
type Cameras = Obj<UserProfile, any>;
type StorePreferences = Obj<UserProfile, any>;
type ExecutorFixation = Obj<UserProfile, any>;
type SpecialExecutorPages = Obj<UserProfile, any>;
type TemporaryWindowSettings = Obj<UserProfile, any>;
type SmartViewPool = Obj<UserProfile, any>;
type UserProfileVariables = Obj<UserProfile, any>;
type RenderQualities = Obj<UserProfile, any>;
type GridColumnRegistry = Obj<UserProfile, any>;
type StatusCenter = Obj<UserProfile, any>;
type PreviewSettings = Obj<UserProfile, any>;
type MessageNotificationSettings = Obj<UserProfile, any>;
type WindowTypes = Obj<MA3_V2_3.UserProfile, any>;
type Collection = Obj<MA3_V2_3.UserProfile, any>;

type Environments = Obj<Environments, UserEnvironment> & {
	/**
	 * Main Programmer Environment
	 */
	1: UserEnvironment;
	/**
	 * Preview Programmer Environment
	 */
	2: UserEnvironment;
};

type Views = Obj<UserProfiles, View>;

type View = Obj<Views, WindowBase>;

type UserAttributePreferences = Obj<UserProfile, UserAttribute>;

type UserAttribute = Obj<UserAttributePreferences, void> & {
	EncoderResolution: Enums.AttriebuteEncoderResolution;
};

type UserEnvironmentChildTypes = Selection;
type UserEnvironment = Obj<Environments, UserEnvironmentChildTypes> & {
	1: Selection;
	2: Selection;
	3: Programmer;
	4: AtFilter;
	6: LivePatch3dSelection;
};
type Selection = Obj<UserEnvironment, any>;
type Programmer = Obj<UserEnvironment, ProgPart>;
type ProgPart = Obj<Programmer, any>;
type AtFilterProps = ObjProps & { filterRef: Filter }
type AtFilter = Obj<UserEnvironment, any, AtFilterProps>;
type LivePatch3dSelection = Obj<UserEnvironment, any>;
