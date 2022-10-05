type Plugins = Obj<DataPool, Plugin> & (Plugin | null)[] & { [index: string]: Plugin | null };

type Plugin = Obj<Plugins, LuaComponent> &
	(LuaComponent | null)[] & { [index: string]: LuaComponent | null };

type LuaComponent = Obj<Plugin, null> & null[] & { [index: string]: null };
