'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowDown, ChevronDown, Plus, XCircle } from 'lucide-react';
import SelectOfferItemPopup from '@/components/SelectOfferItemPopup';
import SelectRequestItemPopup from '@/components/SelectRequestItemPopup';
import ClickAwayListener from 'react-click-away-listener';
import Image from 'next/image';
import { itemTypes } from '@/types';
import BoxGradient from './assets/boxGradient.svg';
import BgGradient from './assets/bgGradient.svg';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
	const [showOfferPopup, setShowOfferPopup] = useState<boolean>(false);
	const [showRequestPopup, setShowRequestPopup] = useState<boolean>(false);
	const [offerItems, setOfferItems] = useState<itemTypes[]>([]);
	const [requestItems, setRequestItems] = useState<itemTypes[]>([]);

	const [isProviderDropdownOpen, setIsProviderDropdownOpen] =
		useState<boolean>(false);
	const [selectedProvider, setSelectedProvider] =
		useState<string>('Gamersberg');

	const calculateTotalValue = (items: itemTypes[]) => {
		let total = 0;
		for (const item of items) {
			total += parseInt(item.value);
		}
		return total;
	};

	const calculateTotalPrice = (items: itemTypes[]) => {
		let total = 0;
		for (const item of items) {
			total += parseInt(item.price);
		}
		return total;
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

	const EmptyBox = () => (
		<div className='aspect-square relative flex flex-col items-center justify-center rounded-3xl px-4 border border-gray-700 bg-[#0A1543]' />
	);

	return (
		<>
			<div className='min-h-screen font-[family-name:var(--font-geist-sans)]'>
				<Navbar />

				<svg
					width='688'
					height='577'
					viewBox='0 0 688 577'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute top-0 left-0 -z-10 hidden md:block'
				>
					<g filter='url(#filter0_f_1_116)'>
						<rect
							x='-76'
							y='-244'
							width='359'
							height='416'
							rx='179.5'
							fill='#2285FA'
						/>
					</g>
					<defs>
						<filter
							id='filter0_f_1_116'
							x='-480.3'
							y='-648.3'
							width='1167.6'
							height='1224.6'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='202.15'
								result='effect1_foregroundBlur_1_116'
							/>
						</filter>
					</defs>
				</svg>

				<Image
					src={BgGradient}
					alt=''
					className='absolute bottom-0 left-0 opacity-10 -z-50'
				/>

				<main className='pt-10 pb-16 px-4 lg:px-0 z-10'>
					<div className='container mx-auto'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 justify-items-center mb-12'>
							{/* Offer Section */}
							<div className='w-full max-w-md relative'>
								<h2 className='text-center font-bold text-2xl mb-10'>Offer</h2>
								<div className='relative rounded-lg overflow-visible'>
									<div className='absolute -bottom-10 left-0 w-full pointer-events-none'>
										<Image src={BoxGradient} alt='' />
									</div>
									<div
										className='relative p-4 sm:p-8 bg-[#2461AA38] rounded-lg'
										style={{
											border: '0.5px solid',
											borderColor:
												'linear-gradient(180deg, #C7F7FF 0%, #779499 100%)',
										}}
									>
										<div className='grid grid-cols-2 gap-4 sm:gap-8'>
											<div
												className='aspect-square relative flex flex-col items-center justify-center rounded-3xl border border-gray-500 bg-[#FFFFFF1A] cursor-pointer'
												onClick={() => setShowOfferPopup(true)}
											>
												<Plus size={61} color='#0074FF' />
												{showOfferPopup && <OfferPopupDesktop />}
											</div>
											{showOfferPopup && <OfferPopupMobile />}

											{!offerItems.length && <EmptyBox />}

											{offerItems.map((item: itemTypes, index: number) => (
												<div
													key={index}
													className='aspect-square relative flex flex-col items-center justify-center rounded-3xl px-4 border border-gray-700 bg-[#0A1543]'
												>
													<Image
														src={item?.image}
														alt=''
														width={64}
														height={64}
														className='mb-2'
													/>
													<h2 className='text-xs font-normal text-[#fff] text-center'>
														{item?.name}
													</h2>
													<div className='w-full mt-3'>
														<h2 className='text-[#1E6FD0] flex items-center justify-between font-normal text-xs'>
															Total Price:{' '}
															<span className='text-[#AED3FF]'>
																{item?.price}
															</span>
														</h2>
														<h2 className='text-[#1E6FD0] flex items-center justify-between font-normal text-xs'>
															Total Value:{' '}
															<span className='text-[#AED3FF]'>
																{item?.value}
															</span>
														</h2>
													</div>
													<XCircle
														size={24}
														color='gray'
														className='absolute top-2 right-2 cursor-pointer'
														onClick={() => deleteOfferItem(index)}
													/>
												</div>
											))}
										</div>

										<div className='w-full space-y-3 mt-8'>
											<h2 className='text-[#FFFFFF80] flex items-center justify-between font-normal text-base'>
												Total Price:{' '}
												<span className='text-[#67E31A]'>
													{calculateTotalPrice(offerItems).toLocaleString()}
												</span>
											</h2>
											<h2 className='text-[#FFFFFF80] flex items-center justify-between font-normal text-base'>
												Total Value:{' '}
												<span className='text-[#67E31A]'>
													{calculateTotalValue(offerItems).toLocaleString()}
												</span>
											</h2>
										</div>
									</div>
								</div>
							</div>

							{/* Request Section */}
							<div className='w-full max-w-md relative'>
								<h2 className='text-center font-bold text-2xl mb-10'>
									Request
								</h2>
								<div className='relative rounded-lg overflow-visible'>
									<div className='absolute -bottom-10 left-0 w-full pointer-events-none'>
										<Image src={BoxGradient} alt='' />
									</div>
									<div
										className='relative p-4 sm:p-8 bg-[#2461AA38] rounded-lg'
										style={{
											border: '0.5px solid',
											borderColor:
												'linear-gradient(180deg, #C7F7FF 0%, #779499 100%)',
										}}
									>
										<div className='grid grid-cols-2 gap-4 sm:gap-8'>
											<div
												className='aspect-square relative flex items-center justify-center bg-[#FFFFFF1A] rounded-3xl cursor-pointer border border-gray-500'
												onClick={() => setShowRequestPopup(true)}
											>
												<Plus size={61} color='#0074FF' />
												{showRequestPopup && <RequestPopupDesktop />}
											</div>
											{showRequestPopup && <RequestPopupMobile />}

											{!requestItems.length && <EmptyBox />}

											{requestItems.map((item: itemTypes, index: number) => (
												<div
													key={index}
													className='aspect-square relative flex flex-col items-center justify-center rounded-3xl px-4 border border-gray-700 bg-[#0A1543]'
												>
													<Image
														src={item?.image}
														alt=''
														width={64}
														height={64}
														className='mb-2'
													/>
													<h2 className='text-xs font-normal text-[#fff] text-center'>
														{item?.name}
													</h2>
													<div className='w-full mt-3'>
														<h2 className='text-[#1E6FD0] flex items-center justify-between font-normal text-xs'>
															Total Price:{' '}
															<span className='text-[#AED3FF]'>
																{item?.price}
															</span>
														</h2>
														<h2 className='text-[#1E6FD0] flex items-center justify-between font-normal text-xs'>
															Total Value:{' '}
															<span className='text-[#AED3FF]'>
																{item?.value}
															</span>
														</h2>
													</div>
													<XCircle
														size={24}
														color='gray'
														className='absolute top-2 right-2 cursor-pointer'
														onClick={() => deleteRequestItem(index)}
													/>
												</div>
											))}
										</div>

										<div className='w-full space-y-3 mt-8'>
											<h2 className='text-[#FFFFFF80] flex items-center justify-between font-normal text-base'>
												Total Price:{' '}
												<span className='text-[#67E31A]'>
													{calculateTotalPrice(requestItems).toLocaleString()}
												</span>
											</h2>
											<h2 className='text-[#FFFFFF80] flex items-center justify-between font-normal text-base'>
												Total Value:{' '}
												<span className='text-[#67E31A]'>
													{calculateTotalValue(requestItems).toLocaleString()}
												</span>
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Provider */}
						<div className='relative mx-auto w-fit'>
							<h2 className='flex items-center justify-center font-normal text-base text-[#FFFFFF] mb-4'>
								Select Value Provider
								<ArrowDown size={16} className='ml-2' />
							</h2>
							<div
								className='mx-auto w-fit flex items-center py-1 px-2.5 rounded-md font-normal text-base cursor-pointer'
								style={{
									background:
										'linear-gradient(180deg, #2461AA 0%, #19B8F5 100%)',
									boxShadow: '0px 4px 4px 0px #00000040 inset',
								}}
								onClick={() =>
									setIsProviderDropdownOpen(!isProviderDropdownOpen)
								}
							>
								{selectedProvider}
								<ChevronDown size={16} className='ml-1' />
							</div>
							{/* Dropdown */}
							{isProviderDropdownOpen && (
								<ClickAwayListener
									onClickAway={() => setIsProviderDropdownOpen(false)}
								>
									<div className='w-[90%] absolute top-20 left-7 bg-[#0A1543] rounded-lg border border-[#FFFFFF80] z-20'>
										<div className='flex flex-col items-center justify-between'>
											<h2
												className='text-[#FFFFFF] font-normal text-sm cursor-pointer w-full text-center py-2 border-b border-[#FFFFFF80]'
												onClick={() => {
													setSelectedProvider('Gamersberg');
													setIsProviderDropdownOpen(false);
												}}
											>
												Gamersberg
											</h2>
											<h2
												className='text-[#FFFFFF] font-normal text-sm cursor-pointer w-full text-center py-2 border-b border-[#FFFFFF80]'
												onClick={() => {
													setSelectedProvider('fruityblox.com');
													setIsProviderDropdownOpen(false);
												}}
											>
												fruityblox.com
											</h2>
											<h2
												className='text-[#FFFFFF] font-normal text-sm cursor-pointer w-full text-center py-2'
												onClick={() => {
													setSelectedProvider('Blox Fruit');
													setIsProviderDropdownOpen(false);
												}}
											>
												Blox Fruit
											</h2>
										</div>
									</div>
								</ClickAwayListener>
							)}
						</div>

						{/* Progress Bar */}
						<ProgressBar percentage={52.17} label='52.17% Overpay (Losing)' />
					</div>
				</main>
			</div>
		</>
	);
}
