import * as React from 'react';

import Sidebar from '@/components/Sidebar';
import ProfileDetails from '@/components/ProfileDetails';
import DailyBooks from './HomeSections/TrendingDaily/DailyBooks';

export default function Home() {
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
							<DailyBooks />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
