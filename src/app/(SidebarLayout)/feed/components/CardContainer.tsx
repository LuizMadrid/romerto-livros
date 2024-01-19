import React from 'react';

import { Toggle } from '@/components/ui/toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import CopyButton from '@/components/common/CopyButton';

import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa6';
import { PiBookmarkSimpleFill, PiLinkBold } from 'react-icons/pi';

interface CardInfoProps {
	image: string;
	initials: string;
	id: string;
	name: string;
	comment: string;
	publicDate: string;
}

const CardContainer = ({ image, initials, name, id, comment, publicDate }: CardInfoProps) => {
	return (
		<>
			<Card className='border-primaryGray backdrop:blur-2xl bg-primaryGray/10 dark:bg-primaryGray/15 max-w-3xl cursor-default'>
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

				<CardContent className='pb-2'>
					<div className='rounded-md border px-3 py-2 text-sm border-primaryGray bg-gray-600/15 dark:bg-gray-500/10 h-24 max-h-40'>
						{comment}
					</div>
				</CardContent>

				<CardFooter className='flex justify-between gap-4'>
					<div className='flex gap-2 my-2 text-gray-400 cursor-pointer'>
						<Toggle className='hover:bg-neutral-400/20 border hover:border-transparent border-primaryGray/50 data-[state=on]:text-colorPrimary data-[state=on]:bg-neutral-500/20 data-[state=on]:border-transparent p-2'>
							<PiBookmarkSimpleFill className='h-4 w-4' />
						</Toggle>

						<Toggle className='hover:bg-neutral-400/20 border hover:border-transparent border-primaryGray/50 data-[state=on]:text-green-500 data-[state=on]:bg-neutral-500/20 data-[state=on]:border-transparent p-2'>
							<FaThumbsUp className='h-4 w-4' />
						</Toggle>

						<Toggle className='hover:bg-neutral-400/20 border hover:border-transparent border-primaryGray/50 data-[state=on]:text-red-500 data-[state=on]:bg-neutral-500/20 data-[state=on]:border-transparent p-2'>
							<FaThumbsDown className='h-4 w-4' />
						</Toggle>

						<Toggle className='hover:bg-neutral-400/20 border hover:border-transparent border-primaryGray/50 p-2'>
							<CopyButton textToCopy={'link do post.. em andamento!'}>
								<PiLinkBold className='h-4 w-4' />
							</CopyButton>
						</Toggle>
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