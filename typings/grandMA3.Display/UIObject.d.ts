type UIObjectProps = ObjProps & {
    // Layout Props
    anchors: Anchors
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
    visible: YesNo
    backColor: Obj


    // Text Props
    alignmentH: AlignmentH
    alignmentV: AlignmentV
    font: Font
    hasHover: YesNo
    icon: string
    text: string
    textAlignmentH: AlignmentH
    textColor: Obj
    textShadow: number;
    textShadowColor: Obj
    /**
     * Scales down the text to fit the box
     */
    textAutoAdjust: YesNo
    texture: `corner${number}`
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
type UIObject = UIObjectProps & UIObjectSignals & {
    readonly absRect: Rect
    readonly absClientRect: Rect
    GetOverlay(): Popup
}
