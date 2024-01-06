type ShowData = Obj<Root, any> &
	any[] & { [index: string]: any } & {
		DataPools: DataPools;
		LivePatch: LivePatch;
		MediaPools: MediaPools;
		UserProfiles: UserProfiles;
		Appearances: Appearances;
		Remotes: Remotes;
		ShowSettings: ShowSettings;
	};
