import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from './Button';
import { Separator } from '../ui/separator';

import { PiCoffeeDuotone, PiBooksDuotone, PiHouseDuotone, PiUserDuotone, PiInfoDuotone, PiNutDuotone, PiClockCounterClockwiseDuotone } from 'react-icons/pi';

const Sidebar = () => {
	return (
		<>
			<div className='h-screen z-50 flex justify-center items-start group/sidebar'>

				<div className='h-full bg-primaryWhiteDarker dark:bg-primaryDark rounded-r-xl text-base flex flex-col justify-between absolute top-0 left-0 group-hover/sidebar:absolute group-hover/sidebar:top-0 group-hover/sidebar:left-0'>
					<ul className='text-gray-500 dark:text-gray-300 font-bold w-14 group-hover/sidebar:w-52 transition-all duration-150 group-hover/sidebar:transition-all group-hover/sidebar:duration-200 group-hover/sidebar:truncate flex flex-col gap-4 p-2'>
            
						<Link
							href={'/'}
							className='flex justify-center items-center pt-2 gap-2'>
							<Image 
								src="/Logo.png" 
								height={36} 
								width={36} 
								alt='Website Logo'
							/>
							<Image 
								className='hidden group-hover/sidebar:block'
								src="/Logo (Letra).png" 
								height={96} 
								width={96} 
								alt='Website Logo'
							/>

						</Link>
            
						<Separator className='bg-primaryGray' />

						<li className='group'>
							<Link 
								href={'/home'}>

								<Button variant='sidebar'>
									<PiHouseDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Página Inicial</span>
								</Button>
							</Link>
						</li>

						<li className='group'>
							<Link href={'/feed'}>
                
								<Button variant='sidebar'>
									<PiCoffeeDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Feed</span>
								</Button>

							</Link>
						</li>

						<Separator className='bg-primaryGray' />
            
						<li className='group'>
							<Link href={'/'}>
                  
								<Button variant='sidebar'>
									<PiBooksDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Livros</span>
								</Button>

							</Link>
						</li>
            
						<li className='group'>
							<Link href={'/'}>

								<Button variant='sidebar'>
									<PiUserDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Perfil</span>
								</Button>

							</Link>
						</li>
            
						<li className='group'>
							<Link href={'/'}>

								<Button variant='sidebar'>
									<PiInfoDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Informações</span>
								</Button>

							</Link>
						</li>

						<Separator className='bg-primaryGray' />

						<li className='group'>
							<Link href={'/login'}>

								<Button variant='sidebar'>
									<PiClockCounterClockwiseDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Login</span>
								</Button>

							</Link>
						</li>

					</ul>

					<ul className='text-gray-500 dark:text-gray-300 font-bold w-14 group-hover/sidebar:w-52 transition-all duration-150 group-hover/sidebar:transition-all group-hover/sidebar:duration-200 group-hover/sidebar:truncate flex flex-col gap-4 p-2'>
						<Separator className='bg-primaryGray' />
            
						<li className='group'>
							<Link href={'/'}>

								<Button variant='sidebar'>
									<PiNutDuotone className='min-w-6 min-h-6 group-hover:text-primary dark:group-hover:text-primaryLighter' />
									<span className='hidden group-hover/sidebar:block'>Configurações</span>
								</Button>
                
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Sidebar;