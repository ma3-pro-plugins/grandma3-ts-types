type GenericObj = Obj<GenericObj, GenericObj> & { [key: string]: GenericObj };

type ObjProps = {
	name: string;
	nameAndApp: string;
	index: number;
};

interface Obj<
	ParentType = Obj<any, any>,
	ChildType = Obj<any, any> | undefined,
	Props extends ObjProps & { [key: string]: any } = ObjProps & { [key: string]: any },
	Clazz extends string = string,
> {
	readonly lock: '' | 'Yes' | 'SS';
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
	AddrNative(): string;
	/** Adds a child to the end of this object childrens list */
	Append(clazz?: string, undo?: UndoHandle, count?: number): any;
	Aquire(clazz?: string, undo?: UndoHandle): ChildType;
	Changed(...args: any): any;
	Children(): ChildType[];
	ClearList(...args: any): any;
	ClearUIChildren(...args: any): any;
	/**
	 * Sometimes when Children() returns no result, then CmdlineChildren will.
	 */
	CmdlineChildren(): ChildType[];
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
	Delete(childIndex: number, undo?: UndoHandle): void;
	Dump(): string;
	Export(...args: any): any;
	Find(...args: any): any;
	FindListItemByName(...args: any): any;
	FindListItemByValueStr(...args: any): any;
	FindParent(...args: any): any;
	/**
	 * Find recursivly an object by name an/or class
	 * @param name exact name of object. If undefined then only class will be matched.
	 * @param clazz partial name of the class
	 */
	FindRecursive(name: string | undefined, clazz?: string): Obj<any, any>;
	FindWild(search: string): any;
	Get(propName: keyof Props, role?: Enums.Roles): any;
	GetAssignedObj(...args: any): any;
	/** Get the child class name */
	GetChildClass(): string;
	GetClass: () => Clazz;
	GetDisplay(): Display;
	GetDisplayIndex(index: number): Display;
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
	Import(filePath: string, fileName: string): boolean;
	Index: () => number;
	InputRun(...args: any): any;
	InputSetAdditionalParameter(...args: any): any;
	InputSetEditTitle(...args: any): any;
	InputSetTitle(...args: any): any;
	/** Insert a child at a given 1-based index, pushing all other children forward */
	Insert(childIndex: number, clazz?: string, undo?: UndoHandle, count?: number): any;
	IsClass(...args: any): any;
	IsEmpty(...args: any): any;
	IsListItemEmpty(...args: any): any;
	IsListItemEnabled(...args: any): any;
	IsValid(...args: any): any;
	Load(...args: any): any;
	MaxCount(...args: any): any;
	/**
	 *  Set a callback that is called when the overlay is closed by one of the following:
	 * - overlay.Close() was called
	 * - CloseAllOverlays() was called
	 * - The user pressed Escape, or clicked a CloseButton.
	 *
	 * General Note: signalId-s should be prefixed by a ":",
	 * but when added to the signalTable we don't use the ":".
	 * e.g.
	 *  OverlaySetCloseCallback(":myHandler")
	 *  signalTable.myHandler = ()=>{}
	 *
	 * The callback signature is:
	 *
	 *  (modalResult: Enums.ModalResult, modalValue: number, ctx: any) => void
	 *
	 * IMPORTANT: When calling overlay.Close(), the Close returns immediatly, and the callback runs in another coroutine.
	 */
	OverlaySetCloseCallback(signalId: string, ctx?: any): any;
	Parent(): ParentType;
	PropertyCount(...args: any): any;
	PropertyName(...args: any): any;
	PropertyType(...args: any): any;
	Ptr(...args: any): any;
	/**
	 * Remove child object
	 * @param childIndex 1-based
	 * @param undo
	 */
	Remove(childIndex: number, undo?: UndoHandle): void;
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
	SetFader(options: { value?: number; faderDisabled?: boolean; token?: string }): void;
	SetListItemAppearance(...args: any): any;
	SetListItemName(...args: any): any;
	SetPositionHint(...args: any): any;
	/**
	 * Darkens the screen.
	 * Can be executed on a Popup object which is appended to a ScreenOverlay or ModalOverlay.
	 * @param callback Unknown
	 */
	ShowModal(callback?: (...args: any) => void): void;
	ToAddr(): FixtureAddress;
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
