type Sequences = Obj<DataPool, Sequence> &
	(Sequence | undefined)[] & { [index: string]: Sequence | undefined };

type SequenceProps = ObjProps & {
	autoStart: boolean
	autoStop: boolean
	autoFix: boolean
	autoStomp: boolean
	autoPrePos: boolean
	commandEnable: boolean
	includeLinkLastGo: boolean
	killProtect: boolean
	offWhenOverridden: boolean
	preferCueAppearance: boolean
	releaseFirstCue: boolean
	softLTP: boolean
	speedFromRate: boolean
	swapProtect: boolean
	useExecutorTime: boolean
	wrapAround: boolean
	xFadeMode: boolean
	xFadeReload: boolean
}

type Sequence = Obj<Sequences, Cue> & SequenceProps &
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
type PartProps = ObjProps & {
	appearance: Obj
	command: string
	note: string
	part: number
}

type Part = Obj<Cue, undefined, PartProps> & {
};
