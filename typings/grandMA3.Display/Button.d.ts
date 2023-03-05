type ButtonProps = UIObjectProps & {
    hasHover: YesNo;
    pluginComponent: GenericObj
    toolTip: string
    enabled: YesNo
}
type ButtonSignals = UIObjectSignals

type Button = UIObject & ButtonProps & ButtonSignals