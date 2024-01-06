type Appearances = Obj<ShowData, Appearance> & Appearance[] & { [index: string]: Appearance };


type Appearance = Obj<Appearances, undefined, AppearanceProps> & AppearanceProps



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

}
