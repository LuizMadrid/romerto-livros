import Sidebar from '@/components/Sidebar';
import ProfileDetails from '@/components/ProfileDetails';
import BooksContainer from '@/components/BooksContainer';

export default function Home() {
	return (
		<>
			<div className='bg-background-white dark:bg-background-dark flex h-full w-full gap-4'>
				<Sidebar />
			
				<div className='text-black dark:text-white h-screen w-screen mr-5'>

					<div className='flex justify-end items-center'>
						<ProfileDetails />
					</div>
					
					<BooksContainer 
						name={'Título do Livro'} 
						image={'livro4.jpg'} 
						sinopse={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, placeat ipsa. Ipsam iure, labore ducimus perspiciatis veniam eius eos quo sint delectus cum. Ex voluptates et, possimus eius quisquam nesciunt!'} 
						date={12} 
						comments={10} 
					/>
				</div>
			</div>
		</>
	);
}
