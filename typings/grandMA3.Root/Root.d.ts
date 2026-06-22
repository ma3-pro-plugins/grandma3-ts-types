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
	Cmdlines: Cmdlines;
	DriveCollect: DriveCollect;
};

type MANetSocket = Obj<Root, void, MANetSocketProps, 'MAnetSocket'> &
	MANetSocketProps & {
		Sessions: Sessions;
		HostTypes: {
			onPC: Obj<MANetSocket, NetworkStation>;
			Console: Obj<MANetSocket, NetworkStation>;
		};
	};
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
	status: StationStatus;
	/**
	 * Readonly
	 */
	sessionManager: 'Yes' | 'No';
};
type StationStatus = 'IdleMaster' | 'GlobalMaster' | 'Connected' | 'Standalone';
type Sessions = Obj<MANetSocket, Session>;
type Session = Obj<Sessions, void, SessionProps, 'Session'> & SessionProps;
type SessionProps = ObjProps;

type MasterPriority = 'High' | 'Normal' | 'Low' | 'VeryLow' | 'Never';
type NetworkStation = Obj<MANetSocket, NetworkStation>;
type NetworkStationProps = ObjProps & {
	ip: string;
	session: string;
	location: string;
	showfile: string;
	status: StationStatus;
	masterPrio: MasterPriority;
	versionBig: SemanticVersionFullString;
	versionSmall: SemanticVersionFullString;
	enabled: YesNo;
	sessionIndex: number;
	sessionSlot: number;
};

type SemanticVersionFullString = `${number}.${number}.${number}.${number}`;
