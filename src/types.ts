import { StaticImageData } from 'next/image';

export interface itemTypes {
	id: number;
	image: string | StaticImageData;
	name: string;
	price: string;
	value: string;
}
