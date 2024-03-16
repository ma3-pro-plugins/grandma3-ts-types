type MediaPoolsChildren = {
	Gobos: GoboImages;
	Symbols: Symbols;
	Images: Images;
	MeshImagePool: MeshImagePool;
	Videos: Videos;
	Sounds: Sounds;
}

type MediaPools = Obj<ShowData, GoboImages | Symbols | Images | MeshImagePool | Videos | Sounds> & MediaPoolsChildren;

type MediaObj = GoboImage | SymbolImage | UserImage | MeshImage | Video | Sound
type GoboImages = Obj<MediaPools, GoboImage>;
type GoboImage = Obj;

type Symbols = Obj<MediaPools, SymbolImage>;
type SymbolImage = Obj;

type Images = Obj<MediaPools, UserImage> & UserImage[] & { [index: string]: UserImage };
type UserImage = Obj<Images, undefined> & { note: string };

type MeshImagePool = Obj<MediaPools, MeshImage>;
type MeshImage = Obj;

type Videos = Obj<MediaPools, Video>;
type Video = Obj;
type Sounds = Obj<MediaPools, Sound>;
type Sound = Obj;
