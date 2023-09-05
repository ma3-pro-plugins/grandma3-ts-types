type Pages = Obj<DataPoolClass, Page> &
	(Sequence | undefined)[] &
{ [index: string]: Sequence | undefined };


type Page = Obj<Pages, Executor>

type Executor = Obj<Page, undefined>

