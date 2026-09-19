type GeneratorTypes = Obj<DataPoolClass, Bitmaps | Generators> & {
	Bitmaps: Bitmaps;
	Generators: Generators;
};

type Bitmaps = Obj<GeneratorTypes, any> & { [index: string]: any | undefined };
type Generators = Obj<GeneratorTypes, any> & { [index: string]: any | undefined };
