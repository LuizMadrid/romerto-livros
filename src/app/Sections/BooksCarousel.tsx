import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import BooksContainer from '@/components/BooksContainer';

const BooksCarousel = () => {
	return (
		<>
			<Carousel className='flex justify-center items-center gap-2'>
				<CarouselPrevious />

				<CarouselContent className='h-80 w-[75vw] flex justify-center items-center'>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className='basis-1/3'>
							<div className="flex gap-4">
								<BooksContainer 
									name={'Título do Livro'} 
									image={'livro1.jpg'} 
									sinopse={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, placeat ipsa. Ipsam iure, labore ducimus perspiciatis veniam eius eos quo sint delectus cum. Ex voluptates et, possimus eius quisquam nesciunt!'} 
									date={25} 
									comments={6} 
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselNext />
			</Carousel>
		</>
	);
};

export default BooksCarousel;