type ShowSettings = Obj<ShowData, Obj> & {
	AddonVariables: AddonVariables;
};

type AddonVariables = Obj<ShowSettings, Variables> & Record<string, Variables>;

type Variables = Obj<AddonVariables, null>;
