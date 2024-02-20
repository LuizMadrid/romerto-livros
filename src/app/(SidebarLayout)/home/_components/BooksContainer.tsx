import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/common/Button';

interface BooksInfoProps {
	name: string;
	image: string;
	sinopse: string;
	date: number;
	edition: number;
}

export const BooksContainer = ({ name, image, sinopse, date, edition }: BooksInfoProps) => {
	return (
		<>
			<div className="flex w-[28rem] h-72 justify-between px-2">
				<div className="overflow-hidden rounded-2xl group/bookImg">
					<Image
						src={image}
						className='h-full transition-all group-hover/bookImg:scale-105 group-hover/bookImg:transition-all' 
						width={160}
						height={256}
						alt={'Falha ao carregar imagem.'}
					/>
				</div>

				<div className="cursor-default w-3/5 flex justify-between flex-col gap-3">
					<h4 className='text-2xl truncate'>{name}</h4>

					<p className="text-sm">Publicado em: {date} | {edition} edição/ões</p>
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