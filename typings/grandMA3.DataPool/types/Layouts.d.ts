type Layouts = Obj<DataPool, Layout> & Layout[] & { [index: string]: Layout };

type Layout = Obj<Layouts, Element> & Element[] & { [index: string]: Element };

type ElementProps = ObjProps & {
	id: number;
	assignType: number;
	action: number;
	appearance: Appearance;
	borderSize: number;
	/** 8 character hex string RGBA */
	borderColor: string;
	/** 8 character hex string RGBA */
	customTextColor: string;
	customTextAlignmentH: 'Center' | 'Left' | 'Right';
	customTextAlignmentV: 'Center' | 'Top' | 'Bottom' | 'Above';
	customTextSize: 'Default' | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32;
	customTextText: string;
	fullResolution: boolean;
	height: number;
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
	width: number;
};
type Element = Obj<Layout, undefined> & ElementProps & {
	object: Obj
};
