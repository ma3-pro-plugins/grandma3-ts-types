type LayoutElementDefaultsCollect = Obj<UserProfile, LayoutDefault> &
	LayoutDefault[] & { [index: string]: LayoutDefault };

type LayoutDefault = Obj<LayoutElementDefaultsCollect, undefined> &
{
	ElementType: string;
	Action: string;
};
