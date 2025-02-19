type MAtricks = Obj<DataPoolClass, MAtrick> & MAtrick[] & { [index: string]: MAtrick };

type MAtrickProps = ObjProps & MAtrickOnlyProps;
type MAtrickTransform = 'None' | 'Mirror';
type MAtrickInvertStyle = 'Pan' | 'Tilt' | 'P+T' | 'All';

type MAtrickOnlyProps = {
	invertStyle: MAtrickInvertStyle;
	invertX: boolean;
	invertY: boolean;
	invertZ: boolean;
	phaserTransform: MAtrickTransform;
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
	// X
	fadeFromX: number | 'None';
	fadeToX: number | 'None';
	delayFromX: number | 'None';
	delayToX: number | 'None';
	speedFromX: number | 'None';
	speedToX: number | 'None';
	phaseFromX: number | 'None';
	phaseToX: number | 'None';
	// Y
	fadeFromY: number | 'None';
	fadeToY: number | 'None';
	delayFromY: number | 'None';
	delayToY: number | 'None';
	speedFromY: number | 'None';
	speedToY: number | 'None';
	phaseFromY: number | 'None';
	phaseToY: number | 'None';
	// Z
	fadeFromZ: number | 'None';
	fadeToZ: number | 'None';
	delayFromZ: number | 'None';
	delayToZ: number | 'None';
	speedFromZ: number | 'None';
	speedToZ: number | 'None';
	phaseFromZ: number | 'None';
	phaseToZ: number | 'None';
};

type MAtrick = Obj<MAtricks, undefined> &
	MAtrickProps & {
		appearance: Appearance;
	};
