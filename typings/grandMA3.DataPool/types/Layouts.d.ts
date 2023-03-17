type Layouts = Obj<DataPool, Layout> & Layout[] & { [index: string]: Layout };

type Layout = Obj<Layouts, Element> & Element[] & { [index: string]: Element };

type ElementProps = {
	id: number;
	assignType: number;
	action: number;
	appearance: Appearance;
	borderSize: number;
	/** 8 character hex string RGBA */
	borderColor: string;
	customText: string;
	fontSize: 'Default' | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32;
	h: number;
	visibilityElement: boolean;
	visibilityBar: boolean;
	visibilityObjectName: boolean;
	visibilityID: boolean;
	visibilityCID: boolean;
	visibilityBorder: boolean;
	visibilityValue: boolean;
	visibilityIndicatorBar: boolean;
	visibilitySelectionRelevance: boolean;
	paddingLeft: number;
	paddingRight: number;
	paddingTop: number;
	paddingBottom: number;
	posX: number;
	posY: number;
	textAlignmentH: 'Center' | 'Left' | 'Right';
	textAlignmentV: 'Center' | 'Top' | 'Bottom' | 'Above';
	/** 8 character hex string RGBA */
	textColor: string;
	w: number;
};
type Element = Obj<Layout, undefined> & ElementProps & {
	object: Obj
};
