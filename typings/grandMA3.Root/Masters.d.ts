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

type Grand = Obj<Masters, MasterGrand> & {
	master: MasterGrand;
	world: MasterGrand;
	reserved: MasterGrand;
	highlight: MasterGrand;
	lowlight: MasterGrand;
	solo: MasterGrand;
	blind: MasterGrand;
	rate: MasterGrand;
	programTime: MasterGrand;
	programXFade: MasterGrand;
	executorTime: MasterGrand;
	executorXFade: MasterGrand;
};

type MasterGrandProps = ObjProps & {
	faderEnabled: boolean;
	faderEnable: number;
	normedValues: number;
};

type MasterGrand = Obj<Grand, undefined, MasterGrandProps> & MasterGrandProps & {};

type Timing = Obj<Masters, MasterTiming>;

type MasterTiming = Obj<Timing, undefined> & {};

type SpeedScale = -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type MasterSpeedProps = ObjProps & {
	/**
	 * Values are -8...-2,-1,0,1,2...8
	 * A 2^x scale factor
	 */
	speedScale: SpeedScale;
};
