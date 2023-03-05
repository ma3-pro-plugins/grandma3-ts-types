type Root = Obj<null, any> &
	any[] & { [index: string]: any } & {
		ShowData: ShowData;
		ColorTheme: ColorTheme
	};

type ColorTheme = Obj & {
	ColorDefCollect: ColorDefCollect
	ColorGroups: ColorGroups
}
type ColorDefCollect = Obj<Root> & {
	Global: ColorDefGroup
	SheetColor: ColorDefGroup
	Playback: ColorDefGroup
	PoolDefault: ColorDefGroup
}

type ColorDefGroup = Obj & {
	[name: string]: ColorDef
}

type ColorGroups = Obj & {
	[name: string]: ColorGroup
}

type ColorDef = {
	RGBA: string
}

type ColorGroup = Obj & {
	[name: string]: MAColor
}

type MAColor = Obj & {
	RGBA: string
}


