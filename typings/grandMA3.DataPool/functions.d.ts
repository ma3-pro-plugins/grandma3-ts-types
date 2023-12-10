type DataPoolClass = Obj<DataPools, any> &
	any[] & { [index: string]: any } & {
		Sequences: Sequences;
		Layouts: Layouts;
		Filters: Filters;
		Plugins: Plugins;
		Pages: Pages;
		PresetPools: PresetPools;
		Groups: Groups;
		Macros: Macros;
		MATricks: MAtricks;
	};

type Groups = Obj<DataPoolClass, Group>;
type Group = Obj<Groups, any>;

type Filters = Obj<DataPoolClass, Filter>;
type Filter = Obj<Filters, any>;

type RecipeProps = ObjProps & {};

type Recipe = Obj<Part, undefined, RecipeProps> & {
	selection: Group;
	values: Preset;
	matricks: Obj;
	filter: Obj;
};
