type MAtricks = Obj<DataPoolClass, MAtrick> & MAtrick[] & { [index: string]: MAtrick };

type MAtrickProps = ObjProps & MAtrickOnlyProps;
type MAtrickOnlyProps = {
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
	xShuffle: number | 'None';
	yShuffle: number | 'None';
	zShuffle: number | 'None';
	xShift: number;
	yShift: number;
	zShift: number;
	fadeFromX: number;
	fadeToX: number;
	delayFromX: number;
	delayToX: number;
	fadeFromY: number;
	fadeToY: number;
	delayFromY: number;
	delayToY: number;
	fadeFromZ: number;
	fadeToZ: number;
	delayFromZ: number;
	delayToZ: number;

	// TODO: more...
};
type MAtrick = Obj<MAtricks, undefined> &
	MAtrickProps & {
		appearance: Appearance;
	};
