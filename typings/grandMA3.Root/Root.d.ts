type Root = Obj<undefined, any> & { [index: string]: any } & {
	ShowData: ShowData;
	ColorTheme: ColorTheme;
	DeviceConfigurations: DeviceConfigurations;
	GraphicsRoot: GraphicsRoot;
	MANetSocket: MANetSocket;
	UsbNotifier: UsbNotifier;
	Temp: RootTemp;
};

type UsbNotifier = Obj<Root, StorageDevice> & {
	StorageDevice: StorageDevice;
};
type StorageDevice = Obj<UsbNotifier, USBDeviceStorage> & USBDeviceStorage[];
type USBDeviceStorageProps = ObjProps & {
	connected: boolean;
	connectedCount: any;
	ip: any;
	mountPoint: any;
};
type USBDeviceStorage = Obj<USBDeviceStorage, void, USBDeviceStorageProps, 'USBDeviceStorage'>;

type RootTemp = Obj<Root, any> & {
	DriveCollect: DriveCollect;
};

type DriveCollect = Obj<RootTemp, Drive>;
type Drive = Obj<DriveCollect, void, DriveProps, 'Drive'> & DriveProps;
type DriveProps = ObjProps & {
	driveType: 'Removeable' | 'Internal' | 'OldVersion';
	path: string;
};

type MANetSocket = Obj<Root, void, MANetSocketProps, 'MAnetSocket'> & MANetSocketProps;
type MANetSocketProps = ObjProps & {
	hostName: string;
	/**
	 * Readonly
	 */
	primaryIp: string;
	session: string;
	showfile: string;
	/**
	 * Readonly
	 */
	status: 'IdleMaster' | string;
	/**
	 * Readonly
	 */
	sessionManager: 'Yes' | 'No';
};
