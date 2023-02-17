type Plugins = Obj<DataPool, Plugin> & (Plugin | null)[] & { [index: string]: Plugin | null };

type PluginProps = {
	scribble: Obj<any, any>;
	appearance: Obj<any, any>;
	author: string;
	version: string;
	path: string;
	userRights: string;
};
type Plugin = Obj<Plugins, LuaComponent, PluginProps> &
	(LuaComponent | null)[] & { [index: string]: LuaComponent | null };

type LuaComponentProps = {
	fileName: string;
	filePath: string;
	fileSize: number;
	isResource: boolean;
	inStream: boolean;
	installed: boolean;
};
type LuaComponent = Obj<Plugin, null, LuaComponentProps> & null[] & { [index: string]: null };
