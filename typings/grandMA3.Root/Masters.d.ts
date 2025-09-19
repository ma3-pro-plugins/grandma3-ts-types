type Masters = Obj<ShowData, any> & {
	Grand: Grand;
	Playback: Playback;
	Speed: Speed;
	Timing: Timing;
};

type Playback = Obj<Masters, MasterPlayback>;

type MasterPlayback = Obj<Playback, undefined> & {};

type Speed = Obj<Masters, MasterSpeed>;

type MasterSpeed = Obj<Speed, undefined, MasterSpeedProps> & MasterSpeedProps & {};

type Grand = Obj<Masters, MasterGrand>;

type MasterGrand = Obj<Grand, undefined> & {};

type Timing = Obj<Masters, MasterTiming>;

type MasterTiming = Obj<Timing, undefined> & {};

type MasterSpeedProps = ObjProps & {
	/**
	 * Values are ...-2,-1,0,1,2...
	 * A 2^x scale factor
	 */
	speedScale: number;
};
