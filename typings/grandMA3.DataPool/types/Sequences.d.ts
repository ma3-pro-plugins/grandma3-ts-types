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
type SequenceCueCommand = 'Enabled' | 'Force No' | 'Force Yes';
type SequenceExecutorDisplayMode = 'Data only' | 'Appearance only' | 'Both';
type SequenceMasterGoMode = 'None' | 'Go' | 'On' | 'Top';
type SequencePlaybackMaster = 'None' | `Playback${number}`;
type SequencePriority = 'Lowest' | 'Low' | 'LTP' | 'High' | 'Highest' | 'HTP' | 'Swap' | 'Super';
type SequenceMib = 'Enabled' | 'Never' | 'Force Early' | 'Force UnpoGo' | 'Force Late';
type SequenceMibMode = 'None' | 'Early' | 'UponGo' | 'Late';
type SequenceXFadeMode = 'Split' | 'AB';
type SequenceProps = ObjProps & {
	autoStart: boolean;
	autoStop: boolean;
	autoFix: boolean;
	autoStomp: boolean;
	autoPrePos: boolean;
	cueCommand: SequenceCueCommand;
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
	xFadeMode: SequenceXFadeMode;
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
type PartCueTiming = number | 'CueTiming';

type PartProps = ObjProps & {
	appearance: Obj;
	command: string;
	note: string;
	part: number;
	/**
	 * Before MA3 v2.3 : Raw Seconds. 1 sec = 16777216
	 * Since MA3 v2.3 : Seconds.
	 */
	cueInFade: number;
	/**
	 * Before MA3 v2.3 : Raw Seconds. 1 sec = 16777216
	 * Since MA3 v2.3 : Seconds.
	 */
	cueInDelay: number;
	sync: boolean;
	transition: Enums.TransitionType;
	tags: string;
	previewCopy: any;
	hasAnyMatricksData: boolean;
	alignRangeX: boolean;
	alignRangeY: boolean;
	alignRangeZ: boolean;
	doShuffle: any;
	memoryType: string;
	moveGridCursor: Enums.GridCursorMovement;
	preserveGridPositions: boolean;
	selectionData: any;
	inputFilter: any;
	cuePart: string;
	featureGroup: any;
	trigger: any;
	valuesMode: Enums.PresetValuesMode;
	magic: boolean;
	presetMode: Enums.PresetMode;
	speedMaster: SequenceSpeedMaster | '';
	speedScale: SequenceSpeedScale;
	presetData: any;
	ownDataPresent: boolean;
	directProgrammerCooking: boolean;
	ownNonCookedDataPresent: boolean;
	mode: any;
	delayToPhase: any;
	dependencies: any;
	references: any;
	maxDepth: number;
	action: any;
	trackingDistance: any;
	duration: number;
	morph: any;
	cueFade: number;
	cueDelay: number;
	cueOutFade: PartCueTiming;
	cueOutDelay: PartCueTiming;
	snapDelay: number;
	individualTiming: Enums.IndividualTiming;
	preset1Fade: PartCueTiming;
	preset1Delay: PartCueTiming;
	preset2Fade: PartCueTiming;
	preset2Delay: PartCueTiming;
	preset3Fade: PartCueTiming;
	preset3Delay: PartCueTiming;
	preset4Fade: PartCueTiming;
	preset4Delay: PartCueTiming;
	preset5Fade: PartCueTiming;
	preset5Delay: PartCueTiming;
	preset6Fade: PartCueTiming;
	preset6Delay: PartCueTiming;
	preset7Fade: PartCueTiming;
	preset7Delay: PartCueTiming;
	preset8Fade: PartCueTiming;
	preset8Delay: PartCueTiming;
	preset9Fade: PartCueTiming;
	preset9Delay: PartCueTiming;
	preset10Fade: PartCueTiming;
	preset10Delay: PartCueTiming;
	preset11Fade: PartCueTiming;
	preset11Delay: PartCueTiming;
	preset12Fade: PartCueTiming;
	preset12Delay: PartCueTiming;
	preset13Fade: PartCueTiming;
	preset13Delay: PartCueTiming;
	preset14Fade: PartCueTiming;
	preset14Delay: PartCueTiming;
	preset15Fade: PartCueTiming;
	preset15Delay: PartCueTiming;
	preset16Fade: PartCueTiming;
	preset16Delay: PartCueTiming;
	commandDelay: number;
	indivFade: number;
	indivDelay: number;
	indivDuration: number;
};

type Part = Obj<Cue, PartRecipe, PartProps> &
	PartProps &
	(PartRecipe | undefined)[] & { [index: string]: PartRecipe | undefined };

declare namespace MA3_v2_0_2 {
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
}
