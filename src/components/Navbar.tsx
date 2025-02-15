import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<div className='bg-black w-full py-5 px-4'>
				<div className='md:hidden flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<Menu
							size={24}
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						/>
						<Image
							src='https://www.gamersberg.com/_next/image?url=%2Fassets%2Flogo.png&w=96&q=75'
							alt='Gamersberg Logo'
							width={34}
							height={34}
						/>
					</div>
					<div className='mr-4'>
						<ul>
							<li>Login</li>
						</ul>
					</div>
				</div>
				<div className='hidden md:flex items-center justify-between'>
					<div className='flex items-center space-x-10'>
						<Image
							src='https://www.gamersberg.com/_next/image?url=%2Fassets%2Flogo.png&w=96&q=75'
							alt='Gamersberg Logo'
							width={34}
							height={34}
						/>
						<ul className='flex items-center space-x-5'>
							<li>Home</li>
							<li>Games</li>
							<li>Giveaways</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className='flex items-center space-x-10 mr-10'>
						<div className=''>
							<input
								type='text'
								className='lg:w-64 bg-transparent border border-[#8C929C÷] rounded-full px-4 py-2 text-white outline-none text-sm'
								placeholder='Search user...'
							/>
						</div>
						<ul>
							<li>Login</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{showMobileMenu && (
				<div className='md:hidden bg-black p-4'>
					<ul className='flex flex-col space-y-4'>
						<li>Home</li>
						<li>Games</li>
						<li>Giveaways</li>
						<li>Contact</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
