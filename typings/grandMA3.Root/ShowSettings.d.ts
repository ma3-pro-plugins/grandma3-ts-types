type ShowSettings = Obj<ShowData, Obj> & {
	AddonVariables: AddonVariables;
};

type AddonVariables = Record<string, Variables>;

type Variables = Obj<AddonVariables, null>;
