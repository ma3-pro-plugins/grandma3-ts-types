type MAtricks = Obj<DataPoolClass, MAtrick> & MAtrick[] & { [index: string]: MAtrick };

type MAtrickProps = ObjProps & {
	x: number;
	y: number;
	z: number;
	xBlock: number | 'None' | 'No Block';
	yBlock: number;
	zBlock: number;
	xGroup: number | 'None' | 'No Group';
	yGroup: number;
	zGroup: number;
	xWings: number | 'None' | 'No Wings';
	yWings: number;
	zWings: number;
	xWidth: number;
	yWidth: number;
	zWidth: number;
	xShuffle: number;
	yShuffle: number;
	zShuffle: number;
	xShift: number;
	yShift: number;
	zShift: number;
	// TODO: more...
};
type MAtrick = Obj<MAtricks, undefined> & MAtrickProps;
