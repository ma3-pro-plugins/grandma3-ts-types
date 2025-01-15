type UILayoutGrid = UIObject &
	UILayoutGridProps & {
		1: ItemCollectRows; // Rows
		2: ItemCollectColumns; // Columns
	} & Obj<any, any>;

type UILayoutGridProps = UIObjectProps & {
	columns: number;
	rows: number;
	defaultMargin: `${number}`;
};

type ItemCollectColumns = GenericObj & {
	[key: number]: Item;
};

type ItemCollectRows = GenericObj & {
	[key: number]: Item;
};

type ItemPropsFixed = {
	sizePolicy: 'Fixed';
	size?: number;
	minSize?: MAUISize;
};
type ItemPropsStrech = {
	sizePolicy: 'Stretch';
	size?: number;
	minSize?: MAUISize;
};
type ItemPropsContent = {
	sizePolicy: 'Content';
	size?: number;
	minSize?: MAUISize;
};
// type ItemProps = ItemPropsFixed | ItemPropsStrech | ItemPropsContent;

type ItemProps = {
	sizePolicy: SizePolicy;
	size?: number;
	minSize?: MAUISize;
};
type Item = GenericObj & ItemProps;
