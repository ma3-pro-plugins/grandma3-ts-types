type Remotes = Obj<ShowData, MIDIRemotes | DCRemotes | DmxRemotes> & {
	DCRemotes: DCRemotes;
	MIDIRemotes: MIDIRemotes;
	DmxRemotes: DmxRemotes;
};

type DCRemotes = Obj<ShowData, any>;
type DmxRemotes = Obj<ShowData, any>;

type MIDIRemotes = Obj<ShowData, MidiRemote> &
	null[] & { [index: string]: null } & {
		Image: Image;
	};

type MidiRemote = Obj<MIDIRemotes, null>;
