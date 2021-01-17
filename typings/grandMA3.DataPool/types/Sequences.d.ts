type Sequences = Obj<DataPool, Sequence | null> &
	(Sequence | null)[] & { [index: string]: Sequence | null };

type Sequence = Obj<Sequences, Cue | null> &
	(Cue | null)[] & { [index: string]: Cue | null } & {
		CurrentChild: () => MultiReturn<[Cue | undefined, string]>;
		Name: string;
	};

type Cue = Obj<Sequence, Part | null> &
	(Part | null)[] & { [index: string]: Part | null } & {
		Name: string;
		No: number;
	};

type Part = Obj<Cue, null> & null[] & { [index: string]: null };
