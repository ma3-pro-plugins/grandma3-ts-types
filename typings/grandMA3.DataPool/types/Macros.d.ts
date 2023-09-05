type Macros = Obj<DataPoolClass, Macro> & Macro[] & { [index: string]: Macro };

type Macro = Obj<Layouts, MacroLine> &
	MacroLine[] & { [index: string]: MacroLine } & {
		appearance: Obj;
	};

type MacroLineProps = ObjProps & {
	wait: number;
	command: string;
	note: string;
	enabled: boolean;
	addToCmdLine: boolean;
	execute: boolean;
};
type MacroLine = Obj<Macro, undefined> & MacroLineProps;
