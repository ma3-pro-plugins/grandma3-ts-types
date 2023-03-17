type Plugins = Obj<DataPool, Plugin> & { [index: string]: Plugin | undefined };

type PluginProps = {
	scribble: Obj<any, any>;
	appearance: Obj<any, any>;
	author: string;
	version: string;
	path: string;
	userRights: string;
};
type Plugin = Obj<Plugins, LuaComponent, PluginProps> &
{ [index: string]: LuaComponent | undefined };

type LuaComponentProps = {
	fileName: string;
	filePath: string;
	fileSize: number;
	isResource: boolean;
	inStream: boolean;
	installed: boolean;
};
type LuaComponent = Obj<Plugin, undefined, LuaComponentProps> & { [index: string]: undefined };
