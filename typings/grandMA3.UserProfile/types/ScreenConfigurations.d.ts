type ScreenConfigurations = Obj<UserProfile, ScreenConfiguration> &
    ScreenConfiguration[] & { [index: string]: ScreenConfiguration };

type ScreenConfiguration = Obj<ScreenConfigurations, ScreenContents>

type ScreenContents = Obj<ScreenConfiguration, ScreenContent | ViewButtonScreens>

type ScreenContent = Obj<ScreenContents, WindowBase>

interface WindowBase extends Obj<ScreenContent, any> {
    WindowAppearance: WindowAppearance,
    WindowScrollPositions: WindowScrollPositions
}
type WindowAppearance = Obj<WindowBase, null>
type WindowScrollPositions = Obj<WindowBase, null>

interface WindowLayoutView extends WindowBase {
    name: 'WindowLayoutView'
    LayoutViewSettings: LayoutViewSettings
}

interface LayoutViewSettingsProps {
    Layout: Layout
    FitType: 'Elements' | 'Canvas' | 'Both'
    ShowTitleBar: boolean
    AutoFit: boolean
}
type LayoutViewSettings = Obj<WindowBase, null> & LayoutViewSettingsProps

type ViewButtonScreens = Obj<ScreenConfiguration, ViewButtonScreen>

type ViewButtonScreen = Obj<ViewButtonScreens, ViewButton>

type ViewButton = Obj<ViewButtonScreen, null>