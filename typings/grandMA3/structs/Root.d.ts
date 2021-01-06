type Root = {
	ShowData: {
		[index: string]: any; // any string access that is unspecified, treat as any
		DataPools: {
			[index: string]: any; // any string access that is unspecified, treat as any
			[key: number]: DataPool;
			Default: DataPool;
		};
	};
	[index: string]: any; // any string access that is unspecified, treat as any
};
