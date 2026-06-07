type Macros = Obj<DataPoolClass, Macro> & Macro[] & { [index: string]: Macro };
type MacroProps = ObjProps & {
	scribble: Scribble;
	note: string;
};
type Macro = Obj<Layouts, MacroLine, MacroProps> &
	MacroLine[] & MacroProps & { [index: string]: MacroLine } & {
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
