type DriveSelectorProps = UIObjectProps & {
	/** String path to a DriveCollect, e.g. `Temp.DriveCollect` (forum #7623). */
	target: string;
	/** When false, hide `Drive.driveType == 'OldVersion'` entries. */
	showOldVersions: boolean;
};

type DriveSelector = UIObject & DriveSelectorProps;
