import React from 'react';

import Sidebar from '@/components/Sidebar';
import ProfileDetails from '@/components/ProfileDetails';
import CardContainer from './components/CardContainer';

const page = () => {
	return (
		<>
			<div className='bg-background-white dark:bg-background-dark flex h-full w-full gap-4'>
				<Sidebar />
			
				<div className='text-black dark:text-white h-screen w-screen overflow-y-scroll overflow-x-hidden'>
					<div className='ml-[5%] mr-[2%] flex flex-col'>
						<div className='flex justify-end items-center'>
							<ProfileDetails />
						</div>

						<div className='mt-[2%]'>
							<p>Feed Page</p>
							<CardContainer
								image={'https://avatars.githubusercontent.com/u/125223185?s=400&u=a7795520bfbb74c00babf7a29f0a119474fac413&v=4'}
								initials='LM'
								name='Luiz Madrid'
								id='madrid.dev'
								publicDate='15/07/2023'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;