type Pages = Obj<DataPoolClass, Page> &
	(Sequence | undefined)[] &
{ [index: string]: Sequence | undefined };


type Page = Obj<Pages, Executor>

type ExecutorProps = {
	fader: 'Master' | 'Temp' //...
}
type Executor = Obj<Page, undefined> & ExecutorProps

