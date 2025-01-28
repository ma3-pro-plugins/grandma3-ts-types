type Appearances = Obj<ShowData, Appearance> & Appearance[] & { [index: string]: Appearance };

type Appearance = Obj<Appearances, undefined, AppearanceProps> & AppearanceProps;

type AppearanceProps = ObjProps & {
	BACKR: number;
	BACKG: number;
	BACKB: number;
	BACKALPHA: number;
	image: UserImage;
	IMAGER: number;
	IMAGEG: number;
	IMAGEB: number;
	IMAGEALPHA: number;
};

type ScribbleProps = ObjProps & {
	scribble: string; // comma separated list of points and colors
};

type Scribbles = Obj<ShowData, Scribble> & Scribble[] & { [index: string]: Scribble };
type Scribble = Obj<Appearances, undefined, ScribbleProps> & ScribbleProps;

type TagProps = ObjProps & {};

type Tags = Obj<ShowData, Tag> & Tag[] & { [index: string]: Tag };
type Tag = Obj<Tags, undefined, TagProps> & TagProps;
