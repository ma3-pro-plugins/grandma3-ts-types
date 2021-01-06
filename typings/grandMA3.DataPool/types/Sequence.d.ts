interface Sequence extends Obj<DataPool, Cue> {
	[index: string]: any; // any string access that is unspecified, treat as any
	CurrentChild: () => MultiReturn<[Cue | undefined, string]>;
	Name: string;
}
