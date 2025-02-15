'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRightLeft, PlusCircle, XCircle } from 'lucide-react';
import SelectOfferItemPopup from '@/components/SelectOfferItemPopup';
import SelectRequestItemPopup from '@/components/SelectRequestItemPopup';
import ClickAwayListener from 'react-click-away-listener';
import Image from 'next/image';
import { itemTypes } from '@/types';

export default function Home() {
	const [showOfferPopup, setShowOfferPopup] = useState(false);
	const [showRequestPopup, setShowRequestPopup] = useState(false);
	const [offerItems, setOfferItems] = useState<itemTypes[]>([]);
	const [requestItems, setRequestItems] = useState<itemTypes[]>([]);

	const calculateTotal = (items: itemTypes[]) => {
		return items.reduce((sum, item) => sum + parseInt(item.value), 0);
	};

	const addOfferItem = (item: itemTypes) => {
		setOfferItems([...offerItems, item]);
		setTimeout(() => setShowOfferPopup(false), 0);
	};

	const addRequestItem = (item: itemTypes) => {
		setRequestItems([...requestItems, item]);
		setTimeout(() => setShowRequestPopup(false), 0);
	};

	const deleteOfferItem = (index: number) => {
		setOfferItems(offerItems.filter((_, i: number) => i !== index));
	};

	const deleteRequestItem = (index: number) => {
		setRequestItems(requestItems.filter((_, i: number) => i !== index));
	};

	const OfferPopupDesktop = () => (
		<div className='hidden md:block'>
			<div>
				<SelectOfferItemPopup
					setShowOfferPopup={setShowOfferPopup}
					addOfferItem={addOfferItem}
				/>
			</div>
		</div>
	);

	const OfferPopupMobile = () => (
		<div className='md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
			<ClickAwayListener onClickAway={() => setShowOfferPopup(false)}>
				<div className='w-full mx-4'>
					<SelectOfferItemPopup
						setShowOfferPopup={setShowOfferPopup}
						addOfferItem={addOfferItem}
					/>
				</div>
			</ClickAwayListener>
		</div>
	);

	const RequestPopupDesktop = () => (
		<div className='hidden md:block'>
			<div>
				<SelectRequestItemPopup
					setShowRequestPopup={setShowRequestPopup}
					addRequestItem={addRequestItem}
				/>
			</div>
		</div>
	);

	const RequestPopupMobile = () => (
		<div className='md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
			<ClickAwayListener onClickAway={() => setShowRequestPopup(false)}>
				<div className='w-full mx-4'>
					<SelectRequestItemPopup
						setShowRequestPopup={setShowRequestPopup}
						addRequestItem={addRequestItem}
					/>
				</div>
			</ClickAwayListener>
		</div>
	);

	return (
		<>
			<div className='min-h-screen font-[family-name:var(--font-geist-sans)]'>
				<Navbar />

				<main className='py-10'>
					<h1 className='text-3xl text-white text-center font-bold mb-4'>
						Calculator
					</h1>
					<div className='flex flex-col md:flex-row items-start justify-center md:mx-20 mx-4 gap-4'>
						{/* Offer Section */}
						<div className='w-full lg:w-1/3 relative rounded-lg'>
							<div className='flex justify-between items-center pr-4'>
								<h2 className='text-left font-semibold text-2xl py-2 ml-4'>
									Offer (You)
								</h2>
								<div className='text-[#15F5BA] font-semibold'>
									Total: {calculateTotal(offerItems).toLocaleString()}
								</div>
							</div>
							<div className='relative flex flex-wrap p-4 gap-4 justify-between'>
								<div
									className='w-[45%] h-[200px] relative flex items-center justify-center border border-[#15F5BA] rounded-lg cursor-pointer'
									onClick={() => setShowOfferPopup(true)}
								>
									<PlusCircle size={36} color='#15F5BA' />
									{showOfferPopup && <OfferPopupDesktop />}
								</div>
								{showOfferPopup && <OfferPopupMobile />}
								{!offerItems.length && (
									<div className='w-[45%] h-[200px] relative flex flex-col items-center justify-center border border-gray-700 rounded-lg'></div>
								)}
								{offerItems.map((item: itemTypes, index: number) => (
									<div
										key={index}
										className='w-[45%] h-[200px] relative flex flex-col items-center justify-center border border-gray-700 rounded-lg'
									>
										<Image
											src={item?.image}
											alt=''
											width={60}
											height={60}
											className='mb-4'
										/>
										<h2>{item?.price}</h2>
										<h2>{item?.name}</h2>
										<XCircle
											size={24}
											color='gray'
											className='absolute top-2 right-2 cursor-pointer'
											onClick={() => deleteOfferItem(index)}
										/>
									</div>
								))}
							</div>
						</div>

						<div className='mx-auto md:mx-0 my-auto'>
							<ArrowRightLeft className='rotate-90 md:rotate-0' />
						</div>

						{/* Request Section */}
						<div className='w-full lg:w-1/3 relative rounded-lg'>
							<div className='flex justify-between items-center pr-4'>
								<h2 className='text-left font-semibold text-2xl py-2 ml-4'>
									Request (Them)
								</h2>
								<div className='text-[#15F5BA] font-semibold'>
									Total: {calculateTotal(requestItems).toLocaleString()}
								</div>
							</div>
							<div className='relative flex flex-wrap p-4 gap-4 justify-between'>
								<div
									className='w-[45%] h-[200px] relative flex items-center justify-center border border-[#15F5BA] rounded-lg cursor-pointer'
									onClick={() => setShowRequestPopup(true)}
								>
									<PlusCircle size={36} color='#15F5BA' />
									{showRequestPopup && <RequestPopupDesktop />}
								</div>
								{showRequestPopup && <RequestPopupMobile />}
								{!requestItems.length && (
									<div className='w-[45%] h-[200px] relative flex flex-col items-center justify-center border border-gray-700 rounded-lg'></div>
								)}
								{requestItems.map((item: itemTypes, index: number) => (
									<div
										key={index}
										className='w-[45%] h-[200px] relative flex flex-col items-center justify-center border border-gray-700 rounded-lg'
									>
										<Image
											src={item?.image}
											alt=''
											width={60}
											height={60}
											className='mb-4'
										/>
										<h2>{item?.price}</h2>
										<h2>{item?.name}</h2>
										<XCircle
											size={24}
											color='gray'
											className='absolute top-2 right-2 cursor-pointer'
											onClick={() => deleteRequestItem(index)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='flex items-center justify-around text-lg'>
						<div className=''>
							<b>Total Value: {calculateTotal(offerItems).toLocaleString()}</b>
						</div>
						<div className=''>
							<b>
								Total Value: {calculateTotal(requestItems).toLocaleString()}
							</b>
						</div>
					</div>
					<div className='text-center mt-2 text-lg'>
						<b>Difference: </b>{' '}
						{calculateTotal(offerItems) > calculateTotal(requestItems)
							? calculateTotal(offerItems) - calculateTotal(requestItems)
							: calculateTotal(requestItems) - calculateTotal(offerItems)}
					</div>
				</main>
			</div>
		</>
	);
}
