type Layouts = Obj<DataPool, Layout> & Layout[] & { [index: string]: Layout };

type Layout = Obj<Layouts, Element> & Element[] & { [index: string]: Element };

type Element = Obj<Layout, null> &
	null[] & { [index: string]: null } & {
		AssignType: string;
		Action: number;
		Appearance: Appearance;
		VisibilityObjectName: string;
	};
