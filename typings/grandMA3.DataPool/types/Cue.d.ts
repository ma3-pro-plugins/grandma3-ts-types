interface Cue extends Obj<Sequence, Part> {
	[index: string]: any; // any string access that is unspecified, treat as any
	Name: string;
	No: number;
}
