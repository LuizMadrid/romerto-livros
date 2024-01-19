import React from 'react';

import CardContainer from './components/CardContainer';
import AddComment from './components/AddComment';

const page = () => {
	return (
		<>
			<div className='mx-auto'>
				<p>Feed Page</p>

				<AddComment />
							
				<div className='flex flex-col gap-6'>
					<CardContainer
						image={'https://avatars.githubusercontent.com/u/125223185?s=400&u=a7795520bfbb74c00babf7a29f0a119474fac413&v=4'}
						initials='LM'
						name='Luiz Madrid'
						id='madrid.dev'
						comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quae asperiores optio laudantium porro blanditiis sequi, sunt ipsa enim in facilis reprehenderit illo ducimus. Enim, non. Ullam, corrupti eveniet aliquam dolorum doloremque molestias magni molestiae fugit cumque.'
						publicDate='15/07/2023'
					/>
				
					<CardContainer
						image={'https://avatars.githubusercontent.com/u/125223185?s=400&u=a7795520bfbb74c00babf7a29f0a119474fac413&v=4'}
						initials='LM'
						name='Luiz Madrid'
						id='madrid.dev'
						comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quae asperiores optio laudantium porro blanditiis sequi, sunt ipsa enim in facilis reprehenderit illo ducimus. Enim, non. Ullam, corrupti eveniet aliquam dolorum doloremque molestias magni molestiae fugit cumque.'
						publicDate='15/07/2023'
					/>

					<CardContainer
						image={'https://avatars.githubusercontent.com/u/125223185?s=400&u=a7795520bfbb74c00babf7a29f0a119474fac413&v=4'}
						initials='LM'
						name='Luiz Madrid'
						id='madrid.dev'
						comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quae asperiores optio laudantium porro blanditiis sequi, sunt ipsa enim in facilis reprehenderit illo ducimus. Enim, non. Ullam, corrupti eveniet aliquam dolorum doloremque molestias magni molestiae fugit cumque.'
						publicDate='15/07/2023'
					/>

					<CardContainer
						image={'https://avatars.githubusercontent.com/u/125223185?s=400&u=a7795520bfbb74c00babf7a29f0a119474fac413&v=4'}
						initials='LM'
						name='Luiz Madrid'
						id='madrid.dev'
						comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quae asperiores optio laudantium porro blanditiis sequi, sunt ipsa enim in facilis reprehenderit illo ducimus. Enim, non. Ullam, corrupti eveniet aliquam dolorum doloremque molestias magni molestiae fugit cumque.'
						publicDate='15/07/2023'
					/>
				</div>
			</div>
		</>
	);
};

export default page;