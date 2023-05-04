type Remotes = Obj<ShowData, MIDIRemotes | DCRemotes | DmxRemotes> & {
	DCRemotes: DCRemotes;
	MIDIRemotes: MIDIRemotes;
	DmxRemotes: DmxRemotes;
};

type DmxRemotesProps = ObjProps & {
	enabled: boolean
}

type DCRemotes = Obj<ShowData, any>;
type DmxRemotes = Obj<ShowData, any> & DmxRemotesProps &
{ [key: string]: DmxRemote };

type MIDIRemotesProps = ObjProps & {
	enabled: boolean
	feedbackInput: boolean
}

type MIDIRemotes = Obj<ShowData, MIDIRemote> &
{
	Image: Image;
} & MIDIRemotesProps;

type RemoteFaderType = "" |
	"Master" |
	"X" |
	"XA" |
	"XB" |
	"Temp" |
	"Rate" |
	"Speed" |
	"Time"
type RemoteKeyType = "" |
	">>>" |
	"<<<" |
	"Black" |
	"DoubleSpeed" |
	"Flash" |
	"Go+" |
	"Go-" |
	"Goto" |
	"HalfSpeed" |
	"LearnSpeed" |
	"Load" |
	"On" |
	"Off" |
	"Pause" |
	"Rate1" |
	"Select" |
	"SelFix" |
	"Speed1" |
	"Swap" |
	"Time" |
	"Temp" |
	"Toggle" |
	"Top"
type MIDIMidiType = "Note" | "NoteAttack" | "NoteAttackDecay" | "Control"
type RemoteLockType = "" | "Yes"
type MIDIRemoteProps = ObjProps & {
	lock: RemoteLockType
	target: Obj<any, any>
	fader: RemoteFaderType
	key: RemoteKeyType
	outFrom: number
	outTo: number
	enabled: boolean
	in: string
	out: string
	triggerOn: number
	triggerOff: number
	inFrom: number
	inTo: number
	midiChannel: number
	midiIndex: number
	midiType: MIDIMidiType
}

type MIDIRemote = Obj<MIDIRemotes, undefined, MIDIRemoteProps>;

type DmxRemoteResolution = '8bit' | '16bit' | '24bit'
type DmxRemoteProps = ObjProps & {
	lock: RemoteLockType
	target: Obj<any, any>
	fader: RemoteFaderType
	key: RemoteKeyType
	outFrom: number
	outTo: number
	enabled: boolean
	in: string
	out: string
	triggerOn: number
	triggerOff: number
	inFrom: number
	inTo: number
	address: number
	resolution: DmxRemoteResolution
}

type DmxRemote = Obj<DmxRemotes, undefined, DmxRemoteProps>;
