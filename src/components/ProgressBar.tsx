interface ProgressBarProps {
	percentage: number;
	label: string;
}

const ProgressBar = ({ percentage, label }: ProgressBarProps) => {
	return (
		<>
			<div className='mt-9'>
				<div
					className='max-w-[764px] mx-auto bg-[#FFFFFF1A] rounded-full h-2.5'
					style={{ boxShadow: '0px 4px 24.2px 0px #2461AA4D' }}
				>
					<div
						className='bg-[#C71A1A] h-2.5 rounded-full'
						style={{ width: `${percentage}%` }}
					></div>
				</div>
				<p className='text-center text-[#FFFFFF] font-normal text-base mt-2'>
					{label}
				</p>
			</div>
		</>
	);
};

export default ProgressBar;
