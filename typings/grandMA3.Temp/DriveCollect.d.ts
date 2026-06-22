type DriveCollect = Obj<RootTemp, Drive>;
type Drive = Obj<DriveCollect, void, DriveProps, 'Drive'> & DriveProps;
type DriveProps = ObjProps & {
	driveType: 'Removeable' | 'Internal' | 'OldVersion';
	path: string;
};
