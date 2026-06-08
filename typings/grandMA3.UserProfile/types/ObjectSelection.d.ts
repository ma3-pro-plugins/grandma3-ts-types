/** Pool-object selection (sequences, presets, …). MA 2.4+: lives under UserEnvironment[8]. */
type ObjectSelectionProps = ObjProps & {
	/** Integer handle(s); use IntToHandle(). Lua index is 1-based. */
	handles: MAObjectHandleInt[];
	/** Observed on 2.4.2.2 when a sequence is selected; verify before documenting widely. */
	EXECCONFIGSEQUENCE?: string;
};

type ObjectSelection = Obj<UserEnvironment, undefined, ObjectSelectionProps> & ObjectSelectionProps;

/** MA ≤2.3 only: direct child of UserProfile. */
type SequenceSelection = Obj<UserProfile, undefined, SequenceSelectionProps> &
	SequenceSelectionProps;
type SequenceSelectionProps = ObjProps & {
	handles: MAObjectHandleInt[];
};
