import React from 'react';
import BooksCarousel from './BooksCarousel';

const DailyBooks = () => {
	return (
		<>
			<div className='flex flex-col gap-16'>
				<div className='text-primaryWhite font-bold flex items-center justify-center'>
					<h1 className='text-6xl uppercase tracking-widest bg-gradient-to-r from-colorPrimary to-colorSecondary dark:from-colorPrimaryDarker dark:to-colorSecondaryDarker bg-clip-text text-transparent'>Daily Books</h1>
				</div>
				
				<div>
					<BooksCarousel />
				</div>
			</div>
		</>
	);
};

export default DailyBooks;