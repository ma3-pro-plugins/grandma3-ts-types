type Layouts = Obj<DataPool, Layout> & Layout[] & { [index: string]: Layout };

type Layout = Obj<Layouts, Element> & Element[] & { [index: string]: Element };

type ElementProps = ObjProps & {
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
	id: number;
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

declare namespace MA3_V1_8 {
	type ElementProps = {
		action: number;
		assignType: number;
		appearance: Appearance;
		borderSize: number;
		borderColor: string;
		customText: string;
		/** 8 character hex string RGBA */
		fontSize: 'Default' | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32;
		id: number;
		positionH: number;
		positionW: number;
		paddingLeft: number;
		paddingRight: number;
		paddingTop: number;
		paddingBottom: number;
		posX: number;
		posY: number;
		visibilityElement: boolean;
		visibilityBar: boolean;
		visibilityObjectName: boolean;
		visibilityID: boolean;
		visibilityCID: boolean;
		visibilityBorder: boolean;
		visibilityValue: boolean;
		visibilityIndicatorBar: boolean;
		visibilitySelectionRelevance: boolean;
		textAlignmentH: 'Center' | 'Left' | 'Right';
		textAlignmentV: 'Center' | 'Top' | 'Bottom' | 'Above';
		/** 8 character hex string RGBA */
		textColor: string;
	};

	type Element = Obj<Layout, undefined> & ElementProps & {
		object: Obj
	};
}

type Element = Obj<Layout, undefined> & ElementProps & {
	object: Obj
};
