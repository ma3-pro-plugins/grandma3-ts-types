type Remotes = Obj<ShowData, MidiRemotes | DCRemotes | DmxRemotes> & {
	DCRemotes: DCRemotes,
	MidiRemotes: MidiRemotes,
	DmxRemotes: DmxRemotes
}

type DCRemotes = Obj<ShowData, any>
type DmxRemotes = Obj<ShowData, any>

type MidiRemotes = Obj<ShowData, MidiRemote> &
	null[] & { [index: string]: null } & {
		Image: Image;
	};

type MidiRemote = Obj<MidiRemotes, null>