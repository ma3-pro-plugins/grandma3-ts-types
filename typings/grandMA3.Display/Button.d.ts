type ButtonProps = UIObjectProps & {
    hasHover: YesNo;
    pluginComponent: LuaComponent
    toolTip: string
    enabled: YesNo
}
type ButtonSignals = UIObjectSignals

type Button = UIObject & ButtonProps & ButtonSignals