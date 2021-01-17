type Appearances = Obj<ShowData, Appearance> & Appearance[] & { [index: string]: Appearance };

type Appearance = Obj<Appearances, null> &
	null[] & { [index: string]: null } & {
		Image: Image;
	};
