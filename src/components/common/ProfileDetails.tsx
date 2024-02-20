'use client';

import React from 'react';
import Image from 'next/image';

import { ModeToggle } from './ToggleTheme';
// import Button from '@/components/Button';

export const ProfileDetails = () => {
	return (
		<div className='flex items-center justify-end backdrop-blur-0'>
			<div className='flex text-white gap-4 my-3'>
        
				<ModeToggle className={'text-primaryGray dark:text-white hover:text-primaryGray dark:hover:text-white'} />
      
				<Image
					src={'https://avatars.githubusercontent.com/u/125223185?s=400&u=a7795520bfbb74c00babf7a29f0a119474fac413&v=4'}
					width={40}
					height={40}
					className='rounded-full h-10 w-10 mx-auto'
					style={{
						objectFit: 'cover',
					}}
					alt='Imagem Usuário'
				/>
			</div>
		</div>
	);
};