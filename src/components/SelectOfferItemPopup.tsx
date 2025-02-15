import React from 'react';
import { data } from '@/app/data';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface SelectOfferItemPopupProps {
	setShowOfferPopup: (value: boolean) => void;
	addOfferItem: (item: any) => void;
}

const SelectOfferItemPopup = ({
	setShowOfferPopup,
	addOfferItem,
}: SelectOfferItemPopupProps) => {
	const handleClick = (item: any) => {
		addOfferItem(item);
		setShowOfferPopup(false);
	};

	return (
		<>
			<div className='w-full md:w-80 md:h-72 h-96 z-50 absolute md:top-0 left-0 md:left-48 bg-[#13171B] rounded-xl overflow-y-auto cursor-pointer shadow-2xl shadow-gray-900'>
				{data?.map((item, index) => (
					<div
						className='flex items-center justify-between border-b border-gray-800 p-4'
						key={index}
						onClick={() => handleClick(item)}
					>
						<div className='flex items-center'>
							<Image src={item?.image} alt='' width={60} height={60} />
							<div className='ml-4'>
								<h2 className='text-white'>{item?.name}</h2>
								<p className='text-white'>${item?.price}</p>
							</div>
						</div>
						<div className=''>
							<Plus size={30} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default SelectOfferItemPopup;
