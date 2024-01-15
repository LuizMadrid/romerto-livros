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
					src={'/test_photo.jpeg'}
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
