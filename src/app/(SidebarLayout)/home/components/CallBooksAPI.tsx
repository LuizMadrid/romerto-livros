import React, { Key } from 'react';
import BooksContainer from './BooksContainer';

import { CarouselItem } from '@/components/ui/carousel';

const CallBooksAPI = () => {
	const fetchBooks = async () => {
		try {
			const response = await fetch('https://openlibrary.org/trending/daily.json');
			const data = await response.json();
			const booksData = data.works || [];
			return booksData;
		} catch (error) {
			console.error('Erro ao buscar dados da API', error);
			return [];
		}
	};

	const renderBooks = async () => {
		const booksData = await fetchBooks();
		const qtnBooks = 5;

		return booksData.slice(0, qtnBooks).map((booksInfos: { key: Key | null ; title: string; cover_i: string; first_publish_year: number; edition_count: number; }) => (
			<CarouselItem key={booksInfos.key} className="basis-1/3">
				<div className='p-1'>
					<BooksContainer
						name={booksInfos.title}
						image={booksInfos.cover_i ? `https://covers.openlibrary.org/b/id/${booksInfos.cover_i}-M.jpg` : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'}
						sinopse={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, placeat ipsa. Ipsam iure, labore ducimus perspiciatis veniam eius eos quo sint delectus cum. Ex voluptates et, possimus eius quisquam nesciunt!'}
						date={booksInfos.first_publish_year}
						edition={booksInfos.edition_count}
					/>
				</div>
			</CarouselItem>
		));
	};

	return renderBooks();
};

export default CallBooksAPI;