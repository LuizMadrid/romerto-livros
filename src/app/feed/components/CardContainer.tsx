import React from 'react';

import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Button from '@/components/Button';

interface CardInfoProps {
	image: string;
	initials: string;
	id: string;
	name: string;
	publicDate: string
}

const CardContainer = ({image, initials, name, id, publicDate}: CardInfoProps) => {
	return (
		<>
			<Card className='border-primaryGray backdrop:blur-2xl bg-primaryGray/10 dark:bg-primaryGray/15 max-w-3xl'>
				<CardHeader className='flex flex-row justify-start items-center gap-2'>
					<Avatar className='z-0 h-12 w-12'>
						<AvatarImage src={image} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>

					<div>
						<CardTitle className='text-xl'>{name}</CardTitle>
						<CardDescription className='text-gray-500 dark:text-gray-400 text-sm'>@{id}</CardDescription>
					</div>
				</CardHeader>

				<CardContent className='pb-0'>
					<Textarea 
						placeholder='Diga o que está pensando...' 
						className='border-primaryGray h-24 max-h-40'
					/>
				</CardContent>

				<CardFooter className='flex justify-between gap-4'>
					<div>
						<Button>
							Publicar
						</Button>
					</div>
					
					<div className='text-gray-500 dark:text-gray-400 py-2 flex items-center gap-1'>
						<p className='text-sm'>Publicado em:</p>
						<p className='text-xs'>{publicDate}</p>
					</div>


				</CardFooter>
				
			</Card>
		</>
	);
};

export default CardContainer;