type UIObjectProps = ObjProps & {
    // Layout Props
    anchors: Anchors
    backColor: Obj
    padding: Padding
    margin: Margin
    maxSize: `${number},${number}`
    minSize: `${number},${number}`
    h: Height
    w: Width
    x: number
    y: number
    contentDriven: YesNo
    contentWidth: YesNo

    // Appearance Props
    focus: Focus
    hasFocus: YesNo
    hideFocusFrame: YesNo
    interactive: YesNo,
    visible: YesNo
    mixInBackColor: Obj



    // Text Props
    alignmentH: AlignmentH
    alignmentV: AlignmentV
    font: Font
    hasHover: YesNo
    icon: string
    iconAlignmentH: AlignmentH
    iconAlignmentV: AlignmentV
    text: string
    textAlignmentH: AlignmentH
    textColor: Obj
    textShadow: number;
    textShadowColor: Obj
    /**
     * Scales down the text to fit the box
     */
    textAutoAdjust: YesNo
    texture: string
    transparent: YesNo
}

type UIObjectSignals = {
    onLoad: SignalId
    onVisible: SignalId
    keyDown: SignalId
    keyUp: SignalId
    doubleClicked: SignalId
    execute: SignalId
    clicked: SignalId
    focusGet: SignalId
    focusLost: SignalId
}
type UIObject = Obj & UIObjectProps & UIObjectSignals & {
    readonly absRect: Rect
    readonly absClientRect: Rect
    GetOverlay(): Popup
}
