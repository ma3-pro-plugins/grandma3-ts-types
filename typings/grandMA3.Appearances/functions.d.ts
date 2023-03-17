type Appearances = Obj<ShowData, Appearance> & Appearance[] & { [index: string]: Appearance };

type Appearance = Obj<Appearances, undefined> &
{
	image: Image;
};
