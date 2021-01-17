type ImagePools = Obj<ShowData, ImagePool> &
	ImagePool[] & { [index: string]: ImagePool } & {
		Gobos: ImagePool;
		Fixtures: ImagePool;
		Custom: ImagePool;
		MeshImages: ImagePool;
	};

type ImagePool = Obj<ImagePools, Image> & Image[] & { [index: string]: Image };

type Image = Obj<ImagePool, null> & null[] & { [index: string]: null };
