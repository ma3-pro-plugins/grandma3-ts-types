type ShowData = Obj<Root, any> &
	any[] & { [index: string]: any } & {
		DataPools: DataPools;
		LivePatch: LivePatch;
		MediaPools: MediaPools;
		Masters: Masters;
		UserProfiles: UserProfiles;
		Appearances: Appearances;
		Remotes: Remotes;
		ShowSettings: ShowSettings;
		Scribbles: Scribbles;
		Tags: Tags;
	};
