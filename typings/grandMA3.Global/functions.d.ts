// Based on https://github.com/hossimo/GMA3Plugins/wiki/Echo

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

declare type UndoHandle = any; // TODO: find a way to represent this handle
declare type ObjectUserData = any; // TODO: find a way to represent this handle
/**
 * Until MA3 version 2.1.x (Including) the MAObjectHandleStr was lowercase and allowed leading 0-s.
 * Starting from MA3 version 2.2.x the MAObjectHandleStr is uppercase and does not allow leading 0-s.
 */
declare type MAObjectHandleStr = `#${string}`;
type DMXUniverseNumber = number; // 1-1024
type DMXChannelNumber = number; // 1-512
type DMXPatchAddrString = `${DMXUniverseNumber}.${DMXChannelNumber}`;
declare function AddFixtures(params: {
	mode: DMXMode; // DMXMode
	amount: number;
	/**
	 * Name of the first fixture
	 */
	name?: string;
	/**
	 * Fixture ID of the first fixture
	 */
	fid?: string;
	/*
	 * This is a string with the CID for the fixture.
	 * This table field is only valid if the "idtype" is not "Fixture".
	 */
	cid?: string;
	/**
	 * This is a string with the name of the ID Type.
	 * This is only needed if the type is different than "Fixture".
	 */
	idtype?: FixtureIDTypeKeyword;
	/**
	 * This is a table with up to eight strings.
	 * The string must indicate a universe and a start address in the universe.
	 * The two must be separated by a dot. Each table element is used for the up to eight DMX breaks in the patch.
	 */
	patch?: DMXPatchAddrString[];
	layer?: string;
	class?: string;
	/**
	 * This is a handle of the parent fixture.
	 * It is only needed if the fixture should be a sub-fixture of an existing fixture.
	 */
	parent?: Fixture;
	/**
	 * This is an integer indicating an insert index number
	 */
	insert_index?: number;
	/**
	 * This is a string with an undo text.
	 */
	undo?: string;
}): boolean | undefined;
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
	isFixed(exec: Executor): 1 | 0;
};
declare function Confirm(...args: any): any;

declare function CreateUndo(...args: any): UndoHandle;
declare function CurrentEnvironment(): Obj;
declare function CurrentExecPage(...args: any): Page;
declare function CurrentProfile(): UserProfile;
declare function CurrentScreenConfig(): ScreenConfiguration;
declare function CurrentUser(...args: any): any;
declare function DataPool(): DataPoolClass;
declare function DefaultDisplayPositions(...args: any): any;
declare function DeleteIPAddress(...args: any): any;
declare function DelVar(...args: any): any;
declare function DeskLocked(...args: any): any;
declare function DeviceConfiguration(): any;
declare function DirList(...args: any): any;
declare function DumpAllHooks(): any;
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
declare function GetAttributeByUIChannel(uiChannel: number): Attribute;
declare function GetAttributeCount(): number;
declare function GetAttributeIndex(attrName: string): number;
declare function GetButton(...args: any): any;
declare function GetChannelFunction(...args: any): any;
declare function GetChannelFunctionIndex(...args: any): any;
declare function GetDisplayByIndex(displayNumber: number): Display;
declare function GetDisplayCollect(...args: any): DisplayCollect;
declare function GetDMXUniverse(...args: any): any;
declare function GetDMXValue(...args: any): any;
declare function GetExecutor(...args: any): any;
declare function GetFocus(...args: any): any;
declare function GetFocusDisplay(...args: any): any;
declare function GetObject<T extends Obj = Obj>(address: string): T | undefined;
declare function GetPath(...args: any): any;
declare function GetPathOverrideFor(...args: any): any;
declare function GetPathSeparator(): string;
declare function GetPathType(...args: any): any;
declare function GetPresetData(presetOrPart: Preset | Part): PresetData;
declare function GetProgPhaser(...args: any): any;
declare function GetProgPhaserValue(...args: any): any;
declare function GetPropertyColumnId(...args: any): any;
type RTChannel = {
	freq: number;
	dmx_channel: `FixtureType ${string}`; // e.g. FixtureType 14.6.2.1.2
	rt_index: number;
	info: object;
	dmx_lowlight: number;
	dmx_highlight: number;
	dmx_default: number;
	subfixture: SubFixture;
	fixture: Fixture;
	ui_index_first: number;
	patch: {
		break: number;
		ultra: number;
		fine: number;
		coarse: number;
	};
};
declare function GetRTChannel(rt_index: number): RTChannel;
declare function GetRTChannelCount(...args: any): any;
declare function GetSelectedAttribute(...args: any): any;
declare function GetShowFileStatus(): string;
declare function GetSubfixture(...args: any): any;
declare function GetSubfixtureCount(...args: any): any;
declare function GetTokenName(...args: any): any;
declare function GetTokenNameByIndex(...args: any): any;
declare function GetTopModal(...args: any): any;
declare function GetTopOverlay(...args: any): any;
declare function GetUIChannel(ui_channel_index: number): UIChannel;
declare function GetUIChannelCount(...args: any): any;
declare function GetUIChannelIndex(...args: any): any;
declare function GetUIChannels(subFixture: Fixture |SubFixture, returnAsHandles: boolean): UIChannel[];
declare function GetUIObjectAtPosition(...args: any): any;
declare function GetVar(...args: any): string | undefined;
declare function GlobalVars(...args: any): any;
declare function HandleToInt(obj: Obj): number;
declare function HandleToStr(obj: Obj): MAObjectHandleStr;
declare type HookIndex = number;
/**
 * Register a listener for object changes.
 *
 * If this function is called twice with the same callback function (and same object), then the callback will be called only once.
 * If it is called with different callback functions then each of them will be called.
 * @param callback
 * @param obj
 * @param pluginHandle
 */
declare function HookObjectChange<T extends Obj<any, any>>(
	callback: (obj: T, changeType: number) => void,
	obj: T,
	pluginHandle: any,
): HookIndex;
type HostOSString = 'Linux' | 'Windows' | 'Mac' | 'Rtos';
declare function HostOS(): HostOSString;
declare function HostSubType(): 'FullSize' | 'Light' | 'RPU' | 'onPCRackUnit' | 'Undefined';
declare function HostType(): 'Console' | 'onPC' | 'PU';
declare function Import(...args: any): any;
declare function IncProgress(...args: any): any;
declare function IntToHandle(...args: any): any;
declare function IsObjectValid(handle: any): boolean;
declare function IsValid(handle: any): boolean;
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
declare function StrToHandle<T extends Obj = Obj>(strHandle: MAObjectHandleStr): T;
declare function SyncFS(...args: any): any;
declare function TextInput(...args: any): string;
declare function Time(): number;
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
type MAVersionString = `${number}.${number}.${number}.${number}`;
/**
 * Returns software version of grandMA3.
 */
declare function Version(): MAVersionString;
declare function WaitModal(...args: any): any;
declare function WaitObjectDelete(obj: Obj, secondsToWait?: number): true | undefined;

type AttributeName =
	| 'Dimmer'
	| 'Pan'
	| 'Tilt'
	| 'Gobo1'
	| ColorWheelAttributeName
	| ColorRGBAttrName
	| string; // TODO
type ColorWheelAttributeName = 'Color1' | 'Color2' | 'Color3' | 'Color4';
/**
 * type of colorAttrNames
 */
type ColorRGBAttrName =
	| 'ColorRGB_R'
	| 'ColorRGB_G'
	| 'ColorRGB_B'
	| 'ColorRGB_C'
	| 'ColorRGB_M'
	| 'ColorRGB_Y'
	| 'ColorRGB_RY'
	| 'ColorRGB_GY'
	| 'ColorRGB_GC'
	| 'ColorRGB_BC'
	| 'ColorRGB_BM'
	| 'ColorRGB_RM'
	| 'ColorRGB_W'
	| 'ColorRGB_WW'
	| 'ColorRGB_CW'
	| 'ColorRGB_UV';

type PD_AttributeData = PD_AttributeStepValue[] & PD_AttributeValuesMeta;
type PD_AccelDecelType = 1 | 2;
type PD_AttributeStepValue = {
	/**
	 * Range 0-100 float
	 * This value is normalized to the range of the ChannelFunction.
	 * For example, if a ChannelFunction has range of 0-127 (and not 0-255),
	 * then the absolute value of 100, will be 127 in DMX, which is 50% of the range.
	 */
	absolute: number; //0-100
	/**
	 * Range 0-100 float
	 * This is independent of the Physical range. (Not like ReleativePhys as it is exported when exporting a collection of a preset)
	 * For example if the attribute is Tilt, and a preset exists for a fixture type with physical range or 360 degrees.
	 * If you change the physical range of that fixture type, this value won't change, but when you look at relative values in the Fixture sheet or in 3D they will change.
	 */
	relative: number; //0-100
	/**
	 * 16777216 = 100%
	 */
	absolute_value: number; // 16,777,216 = 100%
	abs_release: boolean;
	accel: number; // Phaser
	/**
	 * Phaser
	 * Value of 1, labeled as "F" when 2-dimensional Circle is applied
	 * Value of 2, labeled as "P" when 1-dimensional Sinus is applied
	 **/
	accel_type: PD_AccelDecelType;
	channel_function: number;
	decel: number; // Phaser
	/**
	 * Phaser
	 * Value of 1, labeled as "F" when 2-dimensional Circle is applied
	 * Value of 2, labeled as "P" when 1-dimensional Sinus is applied
	 **/
	decel_type: PD_AccelDecelType;
	integrated: Preset;
	mask_individual: number;
	mask_integrated: number;
	trans: number; // Phaser
	width: number; // Phaser
};
type PD_AttributeStepParamName = keyof PD_AttributeStepValue;
type PD_AttributeStepParamValue = number | boolean | Preset | undefined;
/**
 * Value is an integer x100 from the real value.
 * So 2 measures is value of 200.
 * The range is: 0 - 32 * 100 (32 measures is the max)
 * NOTE: This is a single value for all steps
 */
type PD_MeasurePercent = number;
type PD_AttributeValuesMeta = PD_FixtureMetaData & {
	gridposmatr: any;
	mask_active_phaser: any;
	/**
	 * Value is an integer x100 from the real value.
	 * So 2 measures is value of 200.
	 * The range is: 0 - 32 * 100 (32 measures is the max)
	 * NOTE: This is a single value for all steps
	 */
	measure: PD_MeasurePercent; // Phaser
	/**
	 * Units are abstract ratio from 60 bpm (Speed 1.0 is 60 bpm)
	 * NOTE: This is a single value for all steps
	 */
	speed: number; // Phaser
};
type PD_AttributeValuesMetaParamName = keyof PD_AttributeValuesMeta;

type PD_FixtureMetaData = {
	selective: boolean;
	ui_channel_index: number;
};

/**
 * This fixture address is a unique identifier for a fixture.
 * Is can be directly used with ObjectList() to get the fixture object.
 */
type FixtureAddress = `${FixtureIDTypeKeyword} ${FixtureCIDType}`;
/**
 * This corresponds to the IDType in an exported Group XML.
 * NOTE: The IDType of keyword "Stage" is 0  (same as Fixture), this might be an MA BUG. (MA3 v2.0.2.0)
 */
type FixtureIDType = 0 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type FixtureIDTypeKeyword =
	| 'Fixture'
	| 'Channel'
	| 'Universal'
	| 'HouseLights'
	| 'NonDim'
	| 'Media'
	| 'Fog'
	| 'Effect'
	| 'Pyro'
	| 'MArker'
	/**
	 * Stage: The CID in this case is a relative address from ShowData/Patch/Stages.
	 * Fixture get this address when it has no FID and no CID.
	 * Also, this is not a valid Command syntax keyword. It is only used with ObjectList() function.
	 */
	| 'Stage';

type SubFixtureIType = `${number}`;
type FixtureFIDType = `${number}` | `${number}.${SubFixtureIType}`;

type FixtureCIDOnlyType = `${number}`;
type FixtureCIDType = `${number}` | `${number}.${number}` | `${number}.${number}.${number}`;
/**
 * This is used when a fixture has no FId and no CID.
 * The numbers are object index (1-based) relative to ShowData/Patch/Stages
 */
type FixtureRawRelativeAddressType =
	| `${number}`
	| `${number}.${number}`
	| `${number}.${number}.${number}`
	| `${number}.${number}.${number}.${number}`
	| `${number}.${number}.${number}.${number}.${number}`;
type FixtureIDTypeKeywordNoFixture =
	| 'Channel'
	| 'Universal'
	| 'HouseLights'
	| 'NonDim'
	| 'Media'
	| 'Fog'
	| 'Effect'
	| 'Pyro'
	| 'MArker';

/**
 *
 */
type FixtureAddressAsPresetDataKey =
	| FixtureFIDType
	| `${FixtureIDTypeKeywordNoFixture} ${FixtureCIDOnlyType}`
	| FixtureRawRelativeAddressType;

/**
 * Record<fixtureId, data>
 */
type PresetData = {
	by_fixtures: Record<FixtureAddressAsPresetDataKey, Record<AttributeName, PD_AttributeData>>;
} & {
	[key: number]: PD_AttributeData;
};
