type DataPool = Obj<DataPools, any> &
	any[] & { [index: string]: any } & {
		Sequences: Sequences;
		Layouts: Layouts;
		Plugins: Plugins;
		Pages: Pages;
	};
