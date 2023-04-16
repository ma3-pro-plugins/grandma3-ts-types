type Macros = Obj<DataPool, Macro> & Macro[] & { [index: string]: Macro };

type Macro = Obj<Layouts, MacroLine> & MacroLine[] & { [index: string]: MacroLine };

type MacroLineProps = ObjProps & {};
type MacroLine = Obj<Macro, undefined> & MacroLineProps;
