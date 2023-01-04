type ScreenConfigurations = Obj<UserProfile, ScreenConfiguration> &
    ScreenConfiguration[] & { [index: string]: ScreenConfiguration };

type ScreenConfiguration = Obj<ScreenConfigurations, ScreenContents>

type ScreenContents = Obj<ScreenConfiguration, ScreenContent | ViewButtonScreens>

type ScreenContent = Obj<ScreenContents, WindowBase>

type WindowBaseProps = {
    appearance: Obj<any, any>
    minH: number
    minW: number
    x: number
    y: number
    w: number
    h: number
    display: number
    snapToBlockSize: boolean
    presetPoolType: number
}

interface WindowBase extends Obj<ScreenContent, any, WindowBaseProps>, WindowBaseProps {
    WindowAppearance: WindowAppearance,
    WindowScrollPositions: WindowScrollPositions
}

type WindowAppearance = Obj<WindowBase, null>
type WindowScrollPositions = Obj<WindowBase, null> & {
    scrollV: string,
    scrollH: string
}


interface WindowLayoutView extends WindowBase {
    name: 'WindowLayoutView'
    LayoutViewSettings: LayoutViewSettings
}

interface LayoutViewSettingsProps {
    Layout: Layout
    FitType: 'Elements' | 'Canvas' | 'Both'
    ShowTitleBar: boolean
    AutoFit: boolean
    PaddingLeft: number
    PaddingRight: number
    PaddingBottom: number
    PaddingTop: number
}
type LayoutViewSettings = Obj<WindowBase, null> & LayoutViewSettingsProps

type ViewButtonScreens = Obj<ScreenConfiguration, ViewButtonScreen>

type ViewButtonScreen = Obj<ViewButtonScreens, ViewButton>

type ViewButton = Obj<ViewButtonScreen, null>