type Timers = Obj<DataPoolClass, Timer> &
	(Timer | undefined)[] & { [index: string]: Timer | undefined };

type Timer = Obj<Timers, any>;
