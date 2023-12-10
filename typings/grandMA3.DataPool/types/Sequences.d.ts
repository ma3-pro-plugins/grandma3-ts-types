type Sequences = Obj<DataPoolClass, Sequence> &
	(Sequence | undefined)[] & { [index: string]: Sequence | undefined };

type SequenceRateMaster =
	| 'None'
	| 'Speed1'
	| 'Speed2'
	| 'Speed3'
	| 'Speed4'
	| 'Speed5'
	| 'Speed6'
	| 'Speed7'
	| 'Speed8'
	| 'Speed9'
	| 'Speed10'
	| 'Speed11'
	| 'Speed12'
	| 'Speed13'
	| 'Speed14'
	| 'Speed15'
	| 'BPM';

type SequenceSpeedMaster = SequenceRateMaster;

/**
 * Mul - Multiple (Means multiply the bpm => faster)
 * Div - Divide (Means divide the bpm => slower)
 */
type SequenceSpeedScale =
	| 'Div256'
	| 'Div128'
	| 'Div64'
	| 'Div32'
	| 'Div16'
	| 'Div8'
	| 'Div4'
	| 'Div2'
	| 'One'
	| 'Mul2'
	| 'Mul4'
	| 'Mul8'
	| 'Mul16'
	| 'Mul32'
	| 'Mul64'
	| 'Mul128'
	| 'Mul256';

type SequenceRestartMode = 'Current Cue' | 'First Cue' | 'Next Cue';
type SequenceExecutorDisplayMode = 'Data only' | 'Appearance only' | 'Both';
type SequenceMasterGoMode = 'None' | 'Go' | 'On' | 'Top';
type SequencePlaybackMaster = 'None' | `Playback${number}`;
type SequencePriority = 'Lowest' | 'Low' | 'LTP' | 'High' | 'Highest' | 'HTP' | 'Swap' | 'Super';
type SequenceMib = 'Enabled' | 'Never' | 'Force Early' | 'Force UnpoGo' | 'Force Late';
type SequenceMibMode = 'None' | 'Early' | 'UponGo' | 'Late';
type SequenceProps = ObjProps & {
	autoStart: boolean;
	autoStop: boolean;
	autoFix: boolean;
	autoStomp: boolean;
	autoPrePos: boolean;
	commandEnable: boolean;
	executorDisplayMode: SequenceExecutorDisplayMode;
	includeLinkLastGo: boolean;
	killProtect: boolean;
	masterGoMode: SequenceMasterGoMode;
	offWhenOverridden: boolean;
	playbackMaster: SequencePlaybackMaster;
	preferCueAppearance: boolean;
	priority: SequencePriority;
	rateMaster: SequenceRateMaster;
	rateScale: SequenceSpeedScale;
	releaseFirstCue: boolean;
	restartMode: SequenceRestartMode;
	sequMib?: SequenceMib;
	sequMibMode?: SequenceMibMode;
	softLTP: boolean;
	speedFromRate: boolean;
	speedMaster: SequenceSpeedMaster;
	speedScale: SequenceSpeedScale;
	swapProtect: boolean;
	useExecutorTime: boolean;
	wrapAround: boolean;
	xFadeMode: boolean;
	xFadeReload: boolean;
};

type Sequence = Obj<Sequences, Cue> &
	SequenceProps &
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
	appearance: Obj;
	command: string;
	note: string;
	part: number;
	/**
	 * Raw Seconds. 1 sec = 16777216
	 */
	cueInFade: number;
	/**
	 * Raw Seconds. 1 sec = 16777216
	 */
	cueInDelay: number;
};

type Part = Obj<Cue, Recipe, PartProps> & {};
