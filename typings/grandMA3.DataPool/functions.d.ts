/*
 * Pool can be renamed !! So better
 */
type DataPoolClass = Obj<DataPools, any> & {
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
