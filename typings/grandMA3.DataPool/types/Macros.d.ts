type Macros = Obj<DataPool, Macro> & Macro[] & { [index: string]: Macro };

type Macro = Obj<Layouts, MacroLine> & MacroLine[] & { [index: string]: MacroLine };

type MacroLine = Obj<Macro, null> &
	null[] & { [index: string]: null } & {
	// TODO
};