import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, MenuIcon, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<div className='w-full py-8 xl:px-0 px-4'>
				<div
					className='max-w-[1221px] flex items-center justify-between mx-auto rounded-xl px-4 lg:px-[70px] py-4'
					style={{
						border: '0.5px solid #FFFFFF80',
						boxShadow: '0px 4px 71px 0px #2461AA99',
						backdropFilter: 'blur(200px)',
						background:
							'linear-gradient(90deg, rgba(3, 1, 31, 0) 0%, rgba(3, 1, 32, 0.41) 100%)',
						// borderImageSource:
						// 	'linear-gradient(180deg, #C7F7FF 0%, #779499 100%)',
					}}
				>
					{/* Logo */}
					<div className='flex items-center gap-4'>
						<div className='block md:hidden cursor-pointer'>
							<MenuIcon
								size={24}
								onClick={() => setShowMobileMenu(!showMobileMenu)}
							/>
						</div>
						<Link href='/'>
							<Image
								src='https://www.gamersberg.com/_next/image?url=%2Fassets%2Flogo.png&w=96&q=75'
								alt='logo'
								width={34}
								height={34}
								className='cursor-pointer'
							/>
						</Link>
					</div>

					{/* Menu */}
					<div className='hidden md:block'>
						<ul className='flex items-center space-x-9 text-[#FFFFFF80] font-normal'>
							<Link href='/'>
								<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
									Home
								</li>
							</Link>
							<Link href='/'>
								<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
									Games
								</li>
							</Link>
							<Link href='/'>
								<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
									Giveaways
								</li>
							</Link>
							<Link href='/'>
								<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
									Ugphone
								</li>
							</Link>
							<Link href='/'>
								<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
									Contact
								</li>
							</Link>
						</ul>
					</div>

					{/* Btn */}
					<div className='flex items-center gap-4'>
						<Search size={24} color='#FFFFFF80' className='cursor-pointer' />
						<button
							className='flex items-center py-2 px-8 rounded-md font-normal text-base'
							style={{
								background: 'linear-gradient(180deg, #2461AA 0%, #19B8F5 100%)',
								boxShadow: '0px 4px 4px 0px #00000040 inset',
							}}
						>
							Login
							<ChevronRight size={16} />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`${
						showMobileMenu ? 'block' : 'hidden'
					} md:hidden absolute top-28 left-4 right-4 bg-black rounded-lg p-4 z-50`}
				>
					<ul className='flex flex-col items-start space-y-4'>
						<Link href='/'>
							<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
								Home
							</li>
						</Link>
						<Link href='/'>
							<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
								Games
							</li>
						</Link>
						<Link href='/'>
							<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
								Giveaways
							</li>
						</Link>
						<Link href='/'>
							<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
								Ugphone
							</li>
						</Link>
						<Link href='/'>
							<li className='cursor-pointer hover:text-[#80BAFF] transition-all duration-500'>
								Contact
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
