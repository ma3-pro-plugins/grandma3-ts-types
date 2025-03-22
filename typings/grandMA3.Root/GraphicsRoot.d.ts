type GraphicsRoot = Obj<Root, any> &
	any[] & { [index: string]: any } & {
		TextureCollect: TextureCollect;
		PultCollect: PultCollect;
	};

type TextureCollect = Obj<GraphicsRoot, Textures> & {
	Textures: Textures;
};
type Textures = Obj<TextureCollect, Texture> & {
	[name: string]: Texture;
};
type TextureProps = ObjProps & {
	fileName: string;
	textureRect: { h: number; w: number; x: number; y: number };
	textureIndex: number;
};
type Texture = Obj<Textures, undefined, TextureProps> & TextureProps;

type PultCollect = Obj<GraphicsRoot, Pult> & {
	[name: string]: Pult;
};
type Pult = Obj<PultCollect, Devices | DisplayCollect, PultProps> & PultProps;
type PultProps = ObjProps & {};
type Devices = Obj<Pult, any> & {};
