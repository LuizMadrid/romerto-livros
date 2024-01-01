import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

interface BooksInfoProps {
	name: string;
	image: string;
	sinopse: string;
	date: number;
	comments: number;
}

const BooksContainer = ({name, image, sinopse, date, comments}: BooksInfoProps) => {
	return (
		<>
			<div className="flex max-w-lg gap-6 my-12">
				<div className="overflow-hidden rounded-2xl group/bookImg">
					<Image
						src={`/${image}`}
						className='h-full object-cover transition-all group-hover/bookImg:scale-110 group-hover/bookImg:transition-all' 
						width={160}
						height={256}
						alt={'Falha ao carregar imagem.'}
					/>
				</div>

				<div className="relative cursor-default w-3/5 flex justify-center flex-col gap-3">
					<h4 className='text-2xl'>{name}</h4>

					<p className="text-sm">{date} | {comments} resenhas</p>
					<p className="text-sm text-justify indent-5">
						{sinopse}
					</p>

					<Button variant='secondary'>
						<Link href={'/'}>
							Ler livro
						</Link>
					</Button>
				</div>
			</div>
		</>
	);
};

export default BooksContainer;