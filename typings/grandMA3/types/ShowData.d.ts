type ShowData = Obj<Root, any> &
	any[] & { [index: string]: any } & {
		DataPools: DataPools;
		ImagePools: ImagePools;
		UserProfiles: UserProfiles;
		Appearances: Appearances;
	};
