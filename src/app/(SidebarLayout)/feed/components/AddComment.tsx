import React from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import Button from '@/components/common/Button';

import { PiPaperPlaneRightDuotone } from 'react-icons/pi';

const AddComment = () => {
	return (
		<Card className='flex gap-2 border-primaryGray backdrop:blur-2xl bg-primaryGray/10 dark:bg-primaryGray/15 max-w-3xl mb-12'>
			<CardContent className='pt-6 pr-0 w-full'>
				<Textarea 
					placeholder='Diga o que está pensando...' 
					className='border-primaryGray h-28 max-h-40 focus:bg-gray-600/10 dark:focus:bg-gray-500/5'
				/>
			</CardContent>

			<CardFooter className='flex items-end pl-0 '>
				<Button variant='icon' className='hover:text-black dark:hover:text-white p-2'>
					<PiPaperPlaneRightDuotone />
				</Button>
			</CardFooter>
		</Card>
	);
};

export default AddComment;