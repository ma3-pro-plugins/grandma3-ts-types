type Quickeys = Obj<DataPoolClass, Quickey> &
	(Quickey | undefined)[] & { [index: string]: Quickey | undefined };

type Quickey = Obj<Quickeys, any>;
