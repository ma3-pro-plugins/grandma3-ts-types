
type YesNo = "Yes" | "No"
type Anchors = {
    left: number,
    right: number,
    top: number,
    bottom: number
} | `${number},${number}`

type Padding = {
    left: number,
    right: number,
    top: number,
    bottom: number
}

type Margin = {
    left: number,
    right: number,
    top: number,
    bottom: number
}

type Color = {
    /**
     * HEX string without a leading '#'
     * HEX string must include 8 characters
     */
    rgba: string
}
type Focus = 'InitialFocus' | 'Never' | 'CanHaveFocus' | 'WantsFocus' | 'TabOnly'
type Percentage = `${number}%`
type Width = number | Percentage
type Height = number | Percentage

type SizePolicy = "Fixed" | "Content" | "Stretch"
type AlignmentH = 'Left' | 'Center' | 'Right'
type AlignmentV = 'Top' | 'Center' | 'Bottom'

type Font = 'console32' |
    'console28' |
    'console24' |
    'console20' |
    'console18' |
    'console16' |
    'console14' |
    'console12' |
    'console10' |
    'console8' |
    'Medium20' |
    'Regular32' |
    'Regular28' |
    'Regular24' |
    'Regular20' |
    'Regular18' |
    'Regular16' |
    'Regular14' |
    'Regular11' |
    'Regular9'


type SignalId = string | `:${string}`

type VKPluginName = 'CueNumberInput' |
    'IP4Prefix' |
    'NumericInput' |
    'RelCueNumberInput' |
    'TextInput' |
    'TextInputNumOnly' |
    'TextInputNumOnlyRange' |
    'TextInputTimeOnly'