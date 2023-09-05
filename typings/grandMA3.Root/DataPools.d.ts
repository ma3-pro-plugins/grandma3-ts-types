type DataPools = Obj<ShowData, DataPoolClass> &
DataPoolClass[] & { [index: string]: DataPoolClass } & {
		Default: DataPoolClass;
	};
