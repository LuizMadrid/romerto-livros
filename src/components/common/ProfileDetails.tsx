'use client';

import React from 'react';
import Image from 'next/image';

import { ModeToggle } from './ToggleTheme';
// import Button from '@/components/Button';

const ProfileDetails = () => {
	return (
		<>
			<div className='flex justify-center items-center text-white gap-4 mt-6'>
        
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
		</>
	);
};

export default ProfileDetails;
