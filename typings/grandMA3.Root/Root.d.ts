type Root = Obj<undefined, any> & { [index: string]: any } & {
	ShowData: ShowData;
	ColorTheme: ColorTheme;
	DeviceConfigurations: DeviceConfigurations;
	GraphicsRoot: GraphicsRoot;
	UsbNotifier: UsbNotifier;
};

type UsbNotifier = Obj<Root, StorageDevice> & {
	StorageDevice: StorageDevice;
}
type StorageDevice = Obj<UsbNotifier, USBDeviceStorage> & USBDeviceStorage[]
type USBDeviceStorageProps = ObjProps & {
	connected: boolean;
	connectedCount: any;
	ip: any;
	mountPoint: any;
}
type USBDeviceStorage = Obj<USBDeviceStorage, void,USBDeviceStorageProps, 'USBDeviceStorage'> 