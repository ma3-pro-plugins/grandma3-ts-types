interface Obj<
	ParentType,
	ChildType,
	Props extends { [key: string]: any } = { [key: string]: any },
> {
	name: string;
	nameAndApp: string;
	index: number;
	AddListChildren(...args: any): any;
	AddListChildrenNames(...args: any): any;
	AddListLuaItem(...args: any): any;
	AddListLuaItems(...args: any): any;
	AddListNumericItem(...args: any): any;
	AddListNumericItems(...args: any): any;
	AddListObjectItem(...args: any): any;
	AddListPropertyItem(...args: any): any;
	AddListPropertyItems(...args: any): any;
	AddListRecursiveNames(...args: any): any;
	AddListStringItem(...args: any): any;
	AddListStringItems(...args: any): any;
	Addr(...args: any): any;
	AddrNative(...args: any): any;
	/** Adds a child to the end of this object childrens list */
	Append(clazz: string): ChildType;
	Aquire(...args: any): any;
	Changed(...args: any): any;
	Children(): ChildType[];
	ClearList(...args: any): any;
	ClearUIChildren(...args: any): any;
	CommandAt(...args: any): any;
	CommandCall(...args: any): any;
	CommandCreateDefaults(...args: any): any;
	CommandDelete(...args: any): any;
	CommandStore(...args: any): any;
	Compare(...args: any): any;
	Copy(...args: any): any;
	Count(...args: any): any;
	/**
	 * Create a child at the given index
	 * @param childIndex 1-based
	 * @param clazz class of child
	 * @param undo
	 */
	Create(childIndex: number, clazz?: string, undo?: UndoHandle): ChildType;
	CurrentChild(): ChildType | undefined;
	Delete(...args: any): any;
	Dump(): string;
	Export(...args: any): any;
	Find(...args: any): any;
	FindListItemByName(...args: any): any;
	FindListItemByValueStr(...args: any): any;
	FindParent(...args: any): any;
	FindRecursive(...args: any): any;
	Get(propName: keyof Props): any;
	GetAssignedObj(...args: any): any;
	/** Get the child class name */
	GetChildClass(): string;
	GetClass: () => string;
	GetDisplay(...args: any): any;
	GetDisplayIndex(...args: any): any;
	GetExportFileName(...args: any): any;
	/**
	 * Get Fader value
	 * If the object is an executor, then the options param can be empty, it does nothing.
	 * If the object is a sequence, then the options.token is used to select which fader's value wil be retrieved.
	 * @return double 0-100
	 */
	GetFader(options: GetFaderOptions): number;
	GetFaderText(...args: any): any;
	GetListItemAppearance(...args: any): any;
	GetListItemButton(...args: any): any;
	GetListItemName(...args: any): any;
	GetListItemsCount(...args: any): any;
	GetListItemValueI64(...args: any): any;
	GetListItemValueStr(...args: any): any;
	GetListSelectedItemIndex(...args: any): any;
	GetOverlay(...args: any): any;
	GetScreen(...args: any): any;
	GetUIChild(...args: any): any;
	GetUIChildrenCount(...args: any): any;
	GridCellExists(...args: any): any;
	GridGetBase(...args: any): any;
	GridGetCellData(...args: any): any;
	GridGetCellDimensions(...args: any): any;
	GridGetData(...args: any): any;
	GridGetDimensions(...args: any): any;
	GridGetParentRowId(...args: any): any;
	GridGetScrollCell(...args: any): any;
	GridGetScrollOffset(...args: any): any;
	GridGetSelectedCells(...args: any): any;
	GridGetSelection(...args: any): any;
	GridGetSettings(...args: any): any;
	GridIsCellReadOnly(...args: any): any;
	GridIsCellVisible(...args: any): any;
	GridScrollCellIntoView(...args: any): any;
	GridSetColumnSize(...args: any): any;
	GridsGetExpandHeaderCell(...args: any): any;
	GridsGetLevelButtonWidth(...args: any): any;
	HasActivePlayback(...args: any): any;
	HasParent(...args: any): any;
	HookDelete(...args: any): any;
	Import(...args: any): any;
	Index: () => number;
	InputRun(...args: any): any;
	InputSetAdditionalParameter(...args: any): any;
	InputSetEditTitle(...args: any): any;
	InputSetTitle(...args: any): any;
	/** Insert a child at a given index, pushing all other children forward */
	Insert(...args: any): any;
	IsClass(...args: any): any;
	IsEmpty(...args: any): any;
	IsListItemEmpty(...args: any): any;
	IsListItemEnabled(...args: any): any;
	IsValid(...args: any): any;
	Load(...args: any): any;
	MaxCount(...args: any): any;
	OverlaySetCloseCallback(...args: any): any;
	Parent(): ParentType;
	PropertyCount(...args: any): any;
	PropertyName(...args: any): any;
	PropertyType(...args: any): any;
	Ptr(...args: any): any;
	Remove(...args: any): any;
	RemoveListItem(...args: any): any;
	Resize(...args: any): any;
	Save(...args: any): any;
	ScrollDo(...args: any): any;
	ScrollGetInfo(...args: any): any;
	ScrollGetItemByOffset(...args: any): any;
	ScrollGetItemOffset(...args: any): any;
	ScrollGetItemSize(...args: any): any;
	ScrollIsNeeded(...args: any): any;
	SelectListItemByIndex(...args: any): any;
	SelectListItemByName(...args: any): any;
	SelectListItemByValue(...args: any): any;
	Set(propName: keyof Props, value: any): any;
	SetChildren(...args: any): any;
	SetEmptyListItem(...args: any): any;
	SetEnabledListItem(...args: any): any;
	SetFader(...args: any): any;
	SetListItemAppearance(...args: any): any;
	SetListItemName(...args: any): any;
	SetPositionHint(...args: any): any;
	ShowModal(...args: any): any;
	ToAddr(...args: any): any;
	UIChildren(...args: any): any;
	UILGGetColumnAbsXLeft(...args: any): any;
	UILGGetColumnAbsXRight(...args: any): any;
	UILGGetColumnWidth(...args: any): any;
	UILGGetRowAbsYBottom(...args: any): any;
	UILGGetRowAbsYTop(...args: any): any;
	UILGGetRowHeight(...args: any): any;
	WaitChildren(...args: any): any;
	WaitInit(...args: any): any;
}

type GetFaderOptions = {
	token?: 'FaderMaster' | 'FaderTemp';
	index?: number;
};
