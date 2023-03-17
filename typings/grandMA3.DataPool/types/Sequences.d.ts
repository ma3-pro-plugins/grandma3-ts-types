type Sequences = Obj<DataPool, Sequence> &
	(Sequence | undefined)[] & { [index: string]: Sequence | undefined };

type Sequence = Obj<Sequences, Cue> &
	(Cue | undefined)[] & { [index: string]: Cue | undefined } & {
		CurrentChild: () => LuaMultiReturn<[Cue | undefined, string]>;
		name: string;
	};

type Cue = Obj<Sequence, Part> &
	(Part | undefined)[] & { [index: string]: Part | undefined } & {
		name: string;
		/**
		 * This is the cue number multiplied by a 1000.
		 * e.g. Cue number 5.1 is 5100
		 * This should be used as a cue identifier and NOT the "index" property which is
		 * an integer and for cue numbers 5.1 and 5.2 , both indexes will be 5.
		 */
		no: number;
	};

type Part = Obj<Cue, undefined> & {
	appearance: Obj
};
