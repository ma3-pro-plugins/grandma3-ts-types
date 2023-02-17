type Remotes = Obj<ShowData, MIDIRemotes | DCRemotes | DmxRemotes> & {
	DCRemotes: DCRemotes;
	MIDIRemotes: MIDIRemotes;
	DmxRemotes: DmxRemotes;
};

type DCRemotes = Obj<ShowData, any>;
type DmxRemotes = Obj<ShowData, any>;

type MIDIRemotesProps = {
	enabled: boolean
	feedbackInput: boolean
}

type MIDIRemotes = Obj<ShowData, MIDIRemote> &
	null[] & { [index: string]: null } & {
		Image: Image;
	} & MIDIRemotesProps;

type MIDIFaderType = "" |
	"Master" |
	"X" |
	"XA" |
	"XB" |
	"Temp" |
	"Rate" |
	"Speed" |
	"Time"
type MIDIKeyType = "" |
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
type MIDILocktype = "" | "Yes"
type MIDIRemoteProps = {
	lock: MIDILocktype
	target: Obj<any, any>
	fader: MIDIFaderType
	key: MIDIKeyType
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

type MIDIRemote = Obj<MIDIRemotes, null, MIDIRemoteProps> & MIDIRemoteProps;
