type DataPools = Obj<ShowData, DataPool> &
	DataPool[] & { [index: string]: DataPool } & {
		Default: DataPool;
	};
