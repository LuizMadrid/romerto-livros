import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PiArrowFatLeftDuotone } from 'react-icons/pi';

import { Button } from '@/components/common/Button';
import { Separator } from '@/components/ui/separator';

const NotFound = () => {

	return (
		<>
			<div className='flex flex-col text-center justify-center items-center gap-8 w-screen h-screen'>
				<div className='flex flex-row gap-8 items-center z-10'>
					<h1 className='text-7xl text-primaryGray dark:text-white font-extrabold font-mono'>404</h1>

					<Separator orientation='vertical' className='bg-primaryGray' />

					<p className='text-lg text-primaryGray dark:text-white max-w-md'>Essa não, essa página não pode ser acessada neste momento ou não existe!</p>
				</div>
				
				<Link href='/home' passHref className='z-10'>
					<Button 
						variant='secondary' 
						className='flex gap-2 items-center'>
						<PiArrowFatLeftDuotone />
						Página inicial
					</Button>
				</Link>

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