type CmdlineDmxReadout = 'Hex8' | 'Hex16' | 'Hex24' | 'Dec8' | 'Dec16' | 'Dec24' | 'Percent';

type CmdlineProps = ObjProps & {
	readonly user: string;
	readonly profile: string;
	dmxReadout: CmdlineDmxReadout;
	readonly editObject: string;
	readonly cmdText: string;
	readonly lastCommand: string;
	readonly maxStep: number;
};

type IsFixedFn = (exec: Executor) => 1 | 0;

type Cmdline = Obj<Cmdlines, CmdlineChild, CmdlineProps, 'Cmdline'> &
	CmdlineProps & {
		Undos: Undos;
		Library: Library;
		TabRegistry: TabRegistry;
		TempStoreSettings: TempStoreSettings;
		Image: Image;
		PresetUpdates: PresetUpdates;
		CueUpdates: CueUpdates;
		ShowMetaDataCollect: ShowMetaDataCollect;
		TagFakeCollect: TagFakeCollect;
		RunningPlaybacks: RunningPlaybacks;
		Action(cmd: string): void;
		ClearCmd(): void;
		RefreshMetaData(path: string): void;
		GetSelectedObject(...args: any): any;
		IsFixed: IsFixedFn;
	};

type Cmdlines = Obj<RootTemp, Cmdline> &
	(Cmdline | undefined)[] & { [index: string]: Cmdline | undefined };

type CmdlineChild =
	| Undos
	| Library
	| TabRegistry
	| TempStoreSettings
	| Image
	| PresetUpdates
	| CueUpdates
	| ShowMetaDataCollect
	| TagFakeCollect
	| RunningPlaybacks;

type Undos = Obj<Cmdline, any>;
type Library = Obj<Cmdline, any>;
type TabRegistry = Obj<Cmdline, any>;
type TempStoreSettings = Obj<Cmdline, any>;
type Image = Obj<Cmdline, any>;
type PresetUpdates = Obj<Cmdline, any>;
type CueUpdates = Obj<Cmdline, any>;
type ShowMetaDataCollect = Obj<Cmdline, any>;
type TagFakeCollect = Obj<Cmdline, any>;
type RunningPlaybacks = Obj<Cmdline, any>;
