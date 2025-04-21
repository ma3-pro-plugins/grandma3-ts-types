type DeviceConfigurations = Obj<Root, DMXProtocols> & {
	DMXProtocols: DMXProtocols;
};

type DMXProtocols = Obj<DeviceConfigurations, sACN | ArtNet> & {
	sACN: sACN;
	ArtNet: ArtNet;
};

type ArtNet = Obj<DMXProtocols, ArtNetDataCollect | ArtNetNodeCollect> & {
	ArtNetDataCollect: ArtNetDataCollect;
	ArtNetNodeCollect: ArtNetNodeCollect;
};

type sACN = Obj<DMXProtocols, sACNDataCollect | sACNDiscoveryCollect> & {
	sACNDataCollect: sACNDataCollect;
	sACNDiscoveryCollect: sACNDiscoveryCollect;
};

// ArtNet
type ArtNetDataCollect = Obj<ArtNet, ArtNetData>;
type ArtNetDataProps = ObjProps & {
	localUniverse: DMXUniverseNumber;
	mode: Enums.ArtNetDataMode;
};
type ArtNetData = Obj<ArtNetDataCollect, undefined, ArtNetDataProps> & ArtNetDataProps;

type ArtNetNodeCollect = Obj<ArtNet, ArtNetData>;

// sACN
type sACNDataCollect = Obj<sACN, sACNData>;
type sACNDataProps = ObjProps & {
	localUniverse: number;
	mode: Enums.SacnDataMode;
};
type sACNData = Obj<sACNDataCollect, undefined, sACNDataProps> & sACNDataProps;

type sACNDiscoveryCollect = Obj<sACN, undefined>;
