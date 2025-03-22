/*
 * Pool can be renamed !! So better
 */
type DataPoolClass = Obj<DataPools, any> & {
	index: DataPoolIndex
} & {
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

type Groups = Obj<DataPoolClass, Group>;
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

type RecipeProps = ObjProps & {};

type Recipe = Obj<Part, undefined, RecipeProps> & {
	selection: Group;
	values: Preset;
	matricks: Obj;
	filter: Obj;
};

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
    | 128
