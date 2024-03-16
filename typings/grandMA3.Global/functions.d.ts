// Based on https://github.com/hossimo/GMA3Plugins/wiki/Echo

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

declare type UndoHandle = any; // TODO: find a way to represent this handle
declare type ObjectUserData = any; // TODO: find a way to represent this handle

declare function AddIPAddress(...args: any): any;
declare function AddonVars(...args: any): any;
declare function BuildDetails(...args: any): any;
declare function CheckDMXCollision(...args: any): any;
declare function CheckFIDCollision(...args: any): any;
declare function CloseAllOverlays(...args: any): any;
declare function CloseUndo(undoRef: UndoHandle): any;
/**
 * Run a command in a LUA thread
 * @param cmd
 * @param undo
 * @return returns "OK" if successful, or an error message if the command fails.
 */
declare function Cmd(cmd: string, undo?: UndoHandle): string;
/**
 * Run a command in the MainTask thread
 * @param args
 */
declare function CmdIndirect(cmd: string, undo?: UndoHandle): undefined;
declare function CmdIndirectWait(cmd: string, undo?: UndoHandle): undefined;
declare function CmdObj(): {
	ClearCmd(): void;
	CmdText: string;
	CueUpdates: any;
	Destination: any;
	Library: any;
	MaxStep: any;
	PresetUpdates: any;
	RefreshMetaData(path: any): void;
	ShowMetaDataCollect: object;
	TempStoreSettings: any;
	User: any;
	Undos: any;
};
declare function Confirm(...args: any): any;

declare function CreateUndo(...args: any): UndoHandle;
declare function CurrentExecPage(...args: any): any;
declare function CurrentProfile(): UserProfile;
declare function CurrentUser(...args: any): any;
declare function DataPool(): DataPoolClass;
declare function DefaultDisplayPositions(...args: any): any;
declare function DeleteIPAddress(...args: any): any;
declare function DelVar(...args: any): any;
declare function DeskLocked(...args: any): any;
declare function DirList(...args: any): any;
/**
 * Prints to System Monitor only
 */
declare function Echo(msg: string): void;
declare function ErrEcho(...args: any): any;
declare function ErrPrintf(...args: any): any;
declare function Export(...args: any): any;
declare function ExportCSV(...args: any): any;
declare function ExportJson(...args: any): any;
declare function FileExists(...args: any): any;
declare function FindBestDMXPatchAddr(...args: any): any;
declare function FindBestFocus(...args: any): any;
declare function FindNextFocus(...args: any): any;
declare function FindTexture(...args: any): any;
declare function FixtureType(...args: any): any;
/**
 * This function should be called FromNativeAddr.
 * I acccepts the result of AddrNative() function.
 */
declare function FromAddr(nativeAddr: string): Obj<any, any>;
declare function GetAttributeByUIChannel(...args: any): any;
declare function GetAttributeCount(...args: any): any;
declare function GetAttributeIndex(...args: any): any;
declare function GetButton(...args: any): any;
declare function GetChannelFunction(...args: any): any;
declare function GetChannelFunctionIndex(...args: any): any;
declare function GetDisplayByIndex(displayNumber: number): Display;
declare function GetDisplayCollect(...args: any): any;
declare function GetDMXUniverse(...args: any): any;
declare function GetDMXValue(...args: any): any;
declare function GetExecutor(...args: any): any;
declare function GetFocus(...args: any): any;
declare function GetFocusDisplay(...args: any): any;
declare function GetPath(...args: any): any;
declare function GetPathOverrideFor(...args: any): any;
declare function GetPathSeparator(): string;
declare function GetPathType(...args: any): any;
declare function GetPresetData(preset: Preset | Part): PresetData;
declare function GetProgPhaser(...args: any): any;
declare function GetProgPhaserValue(...args: any): any;
declare function GetPropertyColumnId(...args: any): any;
declare function GetRTChannel(...args: any): any;
declare function GetRTChannelCount(...args: any): any;
declare function GetSelectedAttribute(...args: any): any;
declare function GetSubfixture(...args: any): any;
declare function GetSubfixtureCount(...args: any): any;
declare function GetTokenName(...args: any): any;
declare function GetTokenNameByIndex(...args: any): any;
declare function GetTopModal(...args: any): any;
declare function GetTopOverlay(...args: any): any;
declare function GetUIChannel(...args: any): any;
declare function GetUIChannelCount(...args: any): any;
declare function GetUIChannelIndex(...args: any): any;
declare function GetUIChannels(...args: any): any;
declare function GetUIObjectAtPosition(...args: any): any;
declare function GetVar(...args: any): string | undefined;
declare function GlobalVars(...args: any): any;
declare function HandleToInt(...args: any): number;
declare function HandleToStr(...args: any): any;
declare type HookIndex = number;
declare function HookObjectChange<T extends Obj<any, any>>(
	callback: (obj: T, changeType: number) => void,
	obj: T,
	pluginHandle: any,
): HookIndex;
type HostOSString = 'Linux' | 'Windows' | 'Mac' | 'Rtos';
declare function HostOS(): HostOSString;
declare function HostSubType(...args: any): any;
declare function HostType(...args: any): any;
declare function Import(...args: any): any;
declare function IncProgress(...args: any): any;
declare function IntToHandle(...args: any): any;
declare function IsObjectValid(...args: any): any;
declare function Keyboard(...args: any): any;
declare function KeyboardObj(...args: any): any;
declare function LoadExecConfig(...args: any): any;
declare function LoadStorePreferencesFromProfile(...args: any): any;
declare interface MessageBoxInputOptions {
	name: string;
	value: string;
	/** Custom field added by HEPI. Deprecated! Use MessageBoxHelper. TODO: reomve this ! */
	type?: string;
	/** String containing characters to be blocked from user input */
	blackFilter?: string;
	/** String containing characters that are allowed from user input */
	whiteFilter?: string;
	/** A named ID reference to a special virtual keyboard which will be displayed when the user clicks on the virtual-keyboard icon next tot eh field input. See [this](https://github.com/hossimo/GMA3Plugins/wiki/Text-Input-Plugins) */
	vkPlugin?:
		| 'CueNumberInput'
		| 'IP4Prefix'
		| 'NumericInput'
		| 'RelCueNumberInput'
		| 'TextInput'
		| 'TextInputNumOnly'
		| 'TextInputNumOnlyRange'
		| 'TextInputTimeOnly';
	maxTextLength?: number;
}
declare interface MessageBoxStateOptions {
	name: string;
	state: boolean;
	group?: number;
}
declare interface MessageBoxSelectorOptions {
	name: string;
	selectedValue: number;
	values: { [key: string]: number };
	type?: 0 | 1; //  0-swipe, 1-radio
}
declare interface MessageBoxOptions {
	title: string;
	backColor?: string;
	timeout?: number; // (ms)
	timeoutResultCancel?: boolean;
	timeoutResultID?: number;
	icon?: string;
	titleTextColor?: string;
	messageTextColor?: string;
	message?: string;
	display?: number | Obj<any, any>;
	commands: { value: number; name: string }[];
	inputs?: MessageBoxInputOptions[];
	states?: MessageBoxStateOptions[];
	selectors?: MessageBoxSelectorOptions[];
}
declare interface MessageBoxResult {
	success: boolean;
	result: number;
	inputs: { [key: string]: string };
	selectors: { [key: string]: number };
	states: { [key: string]: boolean };
}
declare function MessageBox(options: MessageBoxOptions): MessageBoxResult;
declare function Mouse(...args: any): any;
declare function MouseObj(...args: any): any;
declare const MultiLanguage: Array<[string, string]>;
declare const Obj: Obj<any, any>;
declare function ObjectList<T extends Obj>(address: string): T[];
declare function OverallDeviceCertificate(...args: any): any;
declare function Patch(): Patch;
declare function PluginVars(...args: any): any;
declare interface PopupInputOptions {
	title: string;
	caller: Display;
	items: string[];
	selectedValue: string;
	x?: number;
	y?: number;
	target?: any;
	render_options?: {
		left_icon: any;
		right_icon: any;
	};
	useTopLeft?: boolean;
	properties?: { [key: string]: number };
}
declare function PopupInput(options: PopupInputOptions): LuaMultiReturn<[number, string]>;
/**
 * Prints to both System Monitor and Command Line History
 */
declare function Printf(...args: any): any;
declare function Programmer(...args: any): any;
declare function ProgrammerPart(...args: any): any;
declare function Pult(...args: any): any;
declare function RefreshLibrary(...args: any): any;
declare function ReleaseType(...args: any): any;
declare function RenewLayoutHook(...args: any): any;
declare function Root(): Root;
declare function SaveExecConfig(...args: any): any;
declare function SaveStorePreferencesToProfile(...args: any): any;
declare function SelectedSequence(): Sequence | undefined;
declare function Selection(...args: any): any;
declare function SelectionComponentX(...args: any): any;
declare function SelectionComponentY(...args: any): any;
declare function SelectionComponentZ(...args: any): any;
declare function SelectionCount(...args: any): any;
declare function SelectionFirst(...args: any): LuaMultiReturn<[any, number, number, number]>;
declare function SelectionNext(...args: any): LuaMultiReturn<[any, number, number, number]>;
declare function SelectionNotifyBegin(...args: any): any;
declare function SelectionNotifyEnd(...args: any): any;
declare function SelectionNotifyObject(...args: any): any;
declare function SerialNumber(...args: any): any;
declare function SetBlockInput(...args: any): any;
declare function SetColor(...args: any): any;
declare function SetFilterSettingsTarget(...args: any): any;
declare function SetLED(...args: any): any;
declare function SetProgPhaser(...args: any): any;
declare function SetProgPhaserValue(...args: any): any;
declare function SetProgress(...args: any): any;
declare function SetProgressRange(...args: any): any;
declare function SetProgressText(...args: any): any;
declare function SetVar(...args: any): any;
declare function ShowData(): ShowData;
declare function ShowSettings(): any;
declare function StartProgress(...args: any): any;
declare function StopProgress(...args: any): any;
declare function StrToHandle(strHandle: string): Obj;
declare function SyncFS(...args: any): any;
declare function TextInput(...args: any): string;
declare function Time(...args: any): any;
declare function Timer(callback: () => void, delaySec: number, repeatTimes: number): void;
declare function ToAddr(...args: any): any;
declare function Touch(
	displayNumber: number,
	action: 'press' | 'move' | 'release',
	touchId: number,
	x: number,
	y: number,
): void;
declare function TouchObj(...args: any): any;
declare function Unhook(hookIndex: HookIndex): any;
/**
 * Unhook all hooks referncing the given function OR object
 * @param callbackFn
 * @param obj
 * @return The number of removed hooks
 */
declare function UnhookMultiple(callbackFn?: () => any, obj?: Obj<any, any>): number;
declare function UserVars(...args: any): any;
/**
 * Returns software version of grandMA3.
 */
declare function Version(): string;
declare function WaitModal(...args: any): any;
declare function WaitObjectDelete(obj: Obj, secondsToWait?: number): true | undefined;

type AttributeName = "Dimmer" | string;
type AttributeValues = {
	absolute_value: number;
	absolute: number;
};

/**
 * Record<fixtureId, data>
 */
type PresetData = { by_fixtures: Record<string, Record<AttributeName, AttributeValues[]>> };
