import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PiArrowFatLeftDuotone } from 'react-icons/pi';

import Button from '@/components/common/Button';
import { Separator } from '@/components/ui/separator';

const NotFound = () => {
	return (
		<>
			<div className='flex flex-col text-center justify-center items-center gap-8 w-screen h-screen -mt-16'>
				<div className='flex flex-row gap-8 items-center'>
					<h1 className='text-7xl text-primaryGray dark:text-white font-extrabold font-mono z-10'>404</h1>

					<Separator orientation='vertical' className='bg-primaryGray' />

					<p className='text-lg z-10 text-primaryGray dark:text-white max-w-md'>Essa não, essa página não pode ser acessada neste momento ou não existe!</p>
				</div>
				
				<Button variant='secondary' className='z-10'>
					<Link 
						href={'/'}
						className='flex gap-2 items-center'>
						<PiArrowFatLeftDuotone />
						Página inicial
					</Link>
				</Button>

				<Image 
					src={'/coffee.svg'} 
					height={576}
					width={576}
					alt='404 Background'
					className='absolute opacity-15 z-0'
				/>
			</div>
		</>
	);
};

export default NotFound;