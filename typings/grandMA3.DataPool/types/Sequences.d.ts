type Sequences = Obj<DataPool, Sequence> &
	(Sequence | null)[] & { [index: string]: Sequence | null };

type Sequence = Obj<Sequences, Cue> &
	(Cue | null)[] & { [index: string]: Cue | null } & {
		CurrentChild: () => LuaMultiReturn<[Cue | undefined, string]>;
		Name: string;
	};

type Cue = Obj<Sequence, Part> &
	(Part | null)[] & { [index: string]: Part | null } & {
		Name: string;
		No: number;
	};

type Part = Obj<Cue, null> & null[] & { [index: string]: null };
