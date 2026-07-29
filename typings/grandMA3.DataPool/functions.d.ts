/*
 * Pool can be renamed !! So better
 */
type DataPoolClass = Obj<DataPools, any> & {
	index: DataPoolIndex;
} & {
	1: Worlds; // Worlds
	2: Filters; // Filters
	4: PresetPools; // PresetPools
	5: Groups; // Groups
	6: Sequences; // Sequences
	7: Plugins; // Plugins
	8: Macros; // default name: Macros
	10: MAtricks; // MATricks
	12: Pages; // Pages
	13: Layouts; // Layouts
	14: Timecodes; // Timecodes
};

type Groups = Obj<DataPoolClass, Group> & {
	Resize: (size: number) => void;
};
type Group = Obj<Groups, any> & {
	selectionData: FixtureSelectionData[];
};
type FixtureSelectionData = {
	grid: {
		inv: number;
		x: number;
		x_inv: number;
		y: number;
		y_inv: number;
		z: number;
		z_inv: number;
	};
	sf_index: number;
};

type Filters = Obj<DataPoolClass, Filter>;
type FilterProps = ObjProps & {};
type Filter = Obj<Filters, any, FilterProps>;

type Worlds = Obj<DataPoolClass, World>;
type WorldProps = ObjProps & {};
type World = Obj<Worlds, any, WorldProps>;

/** Shared props of StandardRecipe and PhaserRecipe (from MA dumps). */
type RecipeBaseProps = ObjProps &
	MAtrickOnlyProps & {
		tags: string;
		previewCopy: any;
		active: boolean;
		hasAnyMatricksData: boolean;
		shuffleMode: Enums.ShuffleMode;
		initialName: string;
		initialMatricks: any;
		xInv: boolean;
		xInvB: boolean;
		xInvG: boolean;
		xInvW: boolean;
		yInv: boolean;
		yInvB: boolean;
		yInvG: boolean;
		yInvW: boolean;
		zInv: boolean;
		zInvB: boolean;
		zInvG: boolean;
		zInvW: boolean;
		alignRangeX: boolean;
		alignRangeY: boolean;
		alignRangeZ: boolean;
		relativeFade: boolean;
		relativeDelay: boolean;
		relativePhase: boolean;
		relativeSpeed: boolean;
		relative: boolean;
		doShuffle: any;
		memoryType: string;
		moveGridCursor: Enums.GridCursorMovement;
		preserveGridPositions: boolean;
		selectionData: any;
		type: string;
		user: any;
		featureGroup: any;
		trigger: any;
		presetMode: Enums.PresetMode;
		storedData: any;
		presetData: any;
		ownDataPresent: boolean;
		directProgrammerCooking: boolean;
		ownNonCookedDataPresent: boolean;
		mode: any;
		recipeTemplate: boolean;
		dependencies: any;
		references: any;
		maxDepth: number;
		action: any;
		selection: Group;
		selectionMode: string;
		preset: Preset;
		matricks: MAtrick;
		filter: World | Filter;
		generator: any;
		values: Preset;
		emptyLastCooking: boolean;
		failedCookedPart: Enums.FailedCookedPart;
		enabled: boolean;
		selectionFromValue: boolean;
		speedX: any;
		phaseX: any;
		fadeX: number;
		delayX: number;
		speedY: any;
		phaseY: any;
		fadeY: number;
		delayY: number;
		speedZ: any;
		phaseZ: any;
		fadeZ: number;
		delayZ: number;
	};

/** Non-phaser cue/preset recipe (class StandardRecipe). MA 2.4+. No children in dumps. */
type StandardRecipeProps = RecipeBaseProps;

type StandardRecipe = Obj<Part | Preset, undefined, StandardRecipeProps, 'StandardRecipe'> &
	StandardRecipeProps;

/** Cue-part / preset phaser recipe (class PhaserRecipe). MA 2.4+ */
type PhaserRecipeProps = RecipeBaseProps & {
	measure: any;
	playbackNShot: any;
	playbackDirection: Enums.PhaserRecipeDirection;
	playbackAdaptiveMeasure: any;
	playbackAdaptiveWidth: any;
	playbackAdaptiveXYRotation: any;
	shape: any;
	has: any;
	individual: any;
};

type PhaserRecipeChild = PhaserRecipeSteps | PhaserRecipeGroupedByFilterAttributeFake;

type PhaserRecipe = Obj<Part | Preset, PhaserRecipeChild, PhaserRecipeProps, 'PhaserRecipe'> &
	PhaserRecipeProps &
	(PhaserRecipeChild | undefined)[] & { [index: string]: PhaserRecipeChild | undefined };

/** Container of PhaserRecipeStep children under a PhaserRecipe. */
type PhaserRecipeSteps = Obj<PhaserRecipe, PhaserRecipeStep, ObjProps, 'PhaserRecipeSteps'> &
	(PhaserRecipeStep | undefined)[] & { [index: string]: PhaserRecipeStep | undefined };

type PhaserRecipeStepProps = ObjProps & {
	step: string;
};

type PhaserRecipeStep = Obj<
	PhaserRecipeSteps,
	PhaserRecipeValueSource,
	PhaserRecipeStepProps,
	'PhaserRecipeStep'
> &
	PhaserRecipeStepProps &
	(PhaserRecipeValueSource | undefined)[] & {
		[index: string]: PhaserRecipeValueSource | undefined;
	};

type PhaserRecipeValueSourceProps = ObjProps & {
	attributes: any;
	shape: string;
	preset: any;
	curve: any;
	transX: any;
	widthX: any;
	accelX: any;
	decelX: any;
	transY: any;
	widthY: any;
	accelY: any;
	decelY: any;
	transZ: any;
	widthZ: any;
	accelZ: any;
	decelZ: any;
	rawValueAbs: any;
	rawValueRel: any;
	valueAbsolute: any;
	valueRelative: any;
};

type PhaserRecipeValueSource = Obj<
	PhaserRecipeStep,
	undefined,
	PhaserRecipeValueSourceProps,
	'PhaserRecipeValueSource'
> &
	PhaserRecipeValueSourceProps;

/** UI/filter grouping node under PhaserRecipe (class PhaserRecipeGroupedByFilterAttributeFake). */
type PhaserRecipeGroupedByFilterAttributeFake = Obj<
	PhaserRecipe,
	PhaserRecipeFilterAttributeFake,
	ObjProps,
	'PhaserRecipeGroupedByFilterAttributeFake'
> &
	(PhaserRecipeFilterAttributeFake | undefined)[] & {
		[index: string]: PhaserRecipeFilterAttributeFake | undefined;
	};

type PhaserRecipeFilterAttributeFakeProps = ObjProps & {
	attributes: any;
	steps: number;
};

type PhaserRecipeFilterAttributeFake = Obj<
	PhaserRecipeGroupedByFilterAttributeFake,
	PhaserRecipeFilterAttributeStepFake,
	PhaserRecipeFilterAttributeFakeProps,
	'PhaserRecipeFilterAttributeFake'
> &
	PhaserRecipeFilterAttributeFakeProps &
	(PhaserRecipeFilterAttributeStepFake | undefined)[] & {
		[index: string]: PhaserRecipeFilterAttributeStepFake | undefined;
	};

/** Listed under FilterAttributeFake in dumps; no specific props observed. */
type PhaserRecipeFilterAttributeStepFake = Obj<
	PhaserRecipeFilterAttributeFake,
	undefined,
	ObjProps,
	'PhaserRecipeFilterAttributeStepFake'
>;

/** Recipe children of a Part or Preset (StandardRecipe or PhaserRecipe). MA 2.4+ */
type PartRecipe = StandardRecipe | PhaserRecipe;

/** Pre-2.4: single Recipe class (before StandardRecipe / PhaserRecipe split). */
declare namespace MA3_V2_3 {
	type RecipeProps = ObjProps & {};

	type Recipe = Obj<Part, undefined, RecipeProps> & {
		selection: Group;
		values: Preset;
		matricks: MAtrick;
		filter: World | Filter;
	};

	type Part = Obj<Cue, Recipe, PartProps> & PartProps;

	type Preset = Obj<PresetPools, Recipe, PresetProps> & PresetProps;
}

type Timecodes = Obj<DataPoolClass, Timecode> & { [key: string]: Timecode };
type Timecode = Obj<Timecodes, Triggers> & { Triggers: Triggers };

type Triggers = Obj<Timecode, Track> & { [key: string]: Track };
type Track = Obj<Triggers, TimeRange>;
type TimeRange = Obj<Track, CmdSubTrack>;
type CmdSubTrack = Obj<TimeRange, CmdSubTrackEvent>;
type CmdSubTrackEventProps = ObjProps & {
	rawTime: number;
};
type CmdSubTrackEvent = Obj<TimeRange, undefined, CmdSubTrackEventProps>;

declare namespace MA3_v2_0_2 {
	type FilterProps = ObjProps & {
		active: boolean;
	};
}

type DataPoolIndex =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31
	| 32
	| 33
	| 34
	| 35
	| 36
	| 37
	| 38
	| 39
	| 40
	| 41
	| 42
	| 43
	| 44
	| 45
	| 46
	| 47
	| 48
	| 49
	| 50
	| 51
	| 52
	| 53
	| 54
	| 55
	| 56
	| 57
	| 58
	| 59
	| 60
	| 61
	| 62
	| 63
	| 64
	| 65
	| 66
	| 67
	| 68
	| 69
	| 70
	| 71
	| 72
	| 73
	| 74
	| 75
	| 76
	| 77
	| 78
	| 79
	| 80
	| 81
	| 82
	| 83
	| 84
	| 85
	| 86
	| 87
	| 88
	| 89
	| 90
	| 91
	| 92
	| 93
	| 94
	| 95
	| 96
	| 97
	| 98
	| 99
	| 100
	| 101
	| 102
	| 103
	| 104
	| 105
	| 106
	| 107
	| 108
	| 109
	| 110
	| 111
	| 112
	| 113
	| 114
	| 115
	| 116
	| 117
	| 118
	| 119
	| 120
	| 121
	| 122
	| 123
	| 124
	| 125
	| 126
	| 127
	| 128;
