export interface ArcadeShieldMessage {
    type: "show-image" | "set-brightness" | "set-palette"
    runId: any
}
export interface ShowImageMessage extends ArcadeShieldMessage {
    type: "show-image"
    data: string
}
export interface SetBrightnessMessage extends ArcadeShieldMessage {
    type: "set-brightness"
    value: number
}
export interface SetPaletteMessage extends ArcadeShieldMessage {
    type: "set-palette"
    data: string
}
