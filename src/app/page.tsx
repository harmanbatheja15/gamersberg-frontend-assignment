'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRightLeft, PlusCircle, XCircle } from 'lucide-react';
import SelectOfferItemPopup from '@/components/SelectOfferItemPopup';
import SelectRequestItemPopup from '@/components/SelectRequestItemPopup';
import ClickAwayListener from 'react-click-away-listener';
import Image from 'next/image';

export default function Home() {
	const [showOfferPopup, setShowOfferPopup] = useState(false);
	const [showRequestPopup, setShowRequestPopup] = useState(false);
	const [offerItems, setOfferItems] = useState<any>([]);
	const [requestItems, setRequestItems] = useState<any>([]);

	const addOfferItem = (item: any) => {
		setOfferItems([...offerItems, item]);
	};

	const addRequestItem = (item: any) => {
		setRequestItems([...requestItems, item]);
	};

	const deleteOfferItem = (index: number) => {
		setOfferItems(offerItems.filter((_: any, i: any) => i !== index));
	};

	const deleteRequestItem = (index: number) => {
		setRequestItems(requestItems.filter((_: any, i: any) => i !== index));
	};

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
							<h2 className='text-left font-semibold text-2xl py-2 ml-4'>
								Offer (You)
							</h2>
							<div className='relative flex flex-wrap p-4 gap-4 justify-between'>
								<div
									className='w-[45%] h-[200px] relative flex items-center justify-center border border-[#15F5BA] rounded-lg cursor-pointer'
									onClick={() => setShowOfferPopup(true)}
								>
									<PlusCircle size={36} color='#15F5BA' />
									<ClickAwayListener
										onClickAway={() => setShowOfferPopup(false)}
										className='hidden md:block'
									>
										<div className='hidden md:block'>
											{showOfferPopup && (
												<SelectOfferItemPopup
													setShowOfferPopup={setShowOfferPopup}
													addOfferItem={addOfferItem}
												/>
											)}
										</div>
									</ClickAwayListener>
								</div>
								<ClickAwayListener
									onClickAway={() => setShowOfferPopup(false)}
									className='md:hidden'
								>
									<div className='md:hidden'>
										{showOfferPopup && (
											<SelectOfferItemPopup
												setShowOfferPopup={setShowOfferPopup}
												addOfferItem={addOfferItem}
											/>
										)}
									</div>
								</ClickAwayListener>
								{!offerItems.length && (
									<div className='w-[45%] h-[200px] relative flex flex-col items-center justify-center border border-gray-700 rounded-lg'></div>
								)}
								{offerItems.map((item: any, index: number) => (
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
							<h2 className='text-left font-semibold text-2xl py-2 ml-4'>
								Request (Them)
							</h2>
							<div className='relative flex flex-wrap p-4 gap-4 justify-between'>
								<div
									className='w-[45%] h-[200px] relative flex items-center justify-center border border-[#15F5BA] rounded-lg cursor-pointer'
									onClick={() => setShowRequestPopup(true)}
								>
									<PlusCircle size={36} color='#15F5BA' />
									<ClickAwayListener
										onClickAway={() => setShowRequestPopup(false)}
										className='hidden md:block'
									>
										<div className='hidden md:block'>
											{showRequestPopup && (
												<SelectRequestItemPopup
													setShowRequestPopup={setShowRequestPopup}
													addRequestItem={addRequestItem}
												/>
											)}
										</div>
									</ClickAwayListener>
								</div>
								<ClickAwayListener
									onClickAway={() => setShowRequestPopup(false)}
									className='md:hidden'
								>
									<div className='md:hidden'>
										{showRequestPopup && (
											<SelectRequestItemPopup
												setShowRequestPopup={setShowRequestPopup}
												addRequestItem={addRequestItem}
											/>
										)}
									</div>
								</ClickAwayListener>
								{!requestItems.length && (
									<div className='w-[45%] h-[200px] relative flex flex-col items-center justify-center border border-gray-700 rounded-lg'></div>
								)}
								{requestItems.map((item: any, index: number) => (
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
				</main>
			</div>
		</>
	);
}
