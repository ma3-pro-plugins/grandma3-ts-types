type Configurations = Obj<DataPoolClass, Configuration> &
	(Configuration | undefined)[] & { [index: string]: Configuration | undefined };

type Configuration = Obj<Configurations, any>;
