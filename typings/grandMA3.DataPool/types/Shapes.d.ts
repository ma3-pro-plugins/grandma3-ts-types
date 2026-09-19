type Shapes = Obj<DataPoolClass, Shape> &
	(Shape | undefined)[] & { [index: string]: Shape | undefined };

type Shape = Obj<Shapes, any>;
