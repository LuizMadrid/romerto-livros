import React from 'react';
import CallBooksAPI from './CallBooksAPI';

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

const BooksCarousel = () => {
	return (
		<>
			<Carousel 
				className='flex justify-center items-center gap-2 mx-[10%]'
				opts={{
					dragFree: true,
				}}>
				<CarouselPrevious />

				<CarouselContent className='flex justify-center items-center'>
					<CallBooksAPI />
				</CarouselContent>

				<CarouselNext />
			</Carousel>
		</>
	);
};

export default BooksCarousel;
