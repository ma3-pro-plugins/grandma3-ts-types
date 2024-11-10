type Plugins = Obj<DataPoolClass, Plugin> & { [index: string]: Plugin | undefined };

type PluginProps = ObjProps & {
	scribble: Obj<any, any>;
	appearance: Obj<any, any>;
	author: string;
	version: string;
	path: string;
	userRights: string;
};

type Plugin = Obj<Plugins, LuaComponent, PluginProps> &
	PluginProps & { note: string } & { [index: string]: LuaComponent | undefined };

type LuaComponentProps = ObjProps & {
	fileName: string;
	filePath: string;
	fileSize: number;
	isResource: boolean;
	inStream: boolean;
	installed: boolean;
};
type LuaComponent = Obj<Plugin, undefined, LuaComponentProps> & { [index: string]: undefined };
