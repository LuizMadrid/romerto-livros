import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from './Button';
import { Separator } from './ui/separator';

import { AiFillSetting, AiFillHome } from 'react-icons/ai'
import { ImBooks } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-start group/sidebar'>

        <div className='h-full bg-white dark:bg-primaryDark text-base flex flex-col justify-between'>
          <ul className='text-gray-500 dark:text-gray-300 font-bold w-[60px] group-hover/sidebar:w-full flex flex-col gap-4 p-2'>
            
            <Link
              href={'/'}
              className='flex justify-center items-center pt-2'>
              <Image 
                className='hidden group-hover/sidebar:block'
                src="/Logo.png" 
                height={140} 
                width={140} 
                alt='Website Logo'
              />
              <Image 
                className='block group-hover/sidebar:hidden'
                src="/Logo Closed.png" 
                height={36} 
                width={36} 
                alt='Website Logo'
              />

            </Link>
            
            <Separator className='bg-primaryGray' />

            <li className='group my-[0.5px] group-hover/sidebar:my-[0.3px] group-hover/sidebar:-mt-[0.2px]'>
              <Link 
                href={'/'}>

                <Button variant='sidebar'className='block group-hover/sidebar:hidden'>
                  <AiFillHome className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                </Button>

                <Button variant='sidebar' className='hidden group-hover/sidebar:flex'>
                  <AiFillHome className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                  <span>Página Inicial</span>
                </Button>

              </Link>
            </li>

            <li className='group my-[0.2px] group-hover/sidebar:my-[0.5px]'>
              <Link href={`/`}>
                
                <Button variant='sidebar' className='block group-hover/sidebar:hidden'>
                  <FaUser className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                </Button>

                <Button variant='sidebar' className='hidden group-hover/sidebar:flex'>
                  <FaUser className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                  <span>Seu Perfil</span>
                </Button>

              </Link>
            </li>
            
            <Separator className='bg-primaryGray' />
            
            <li className='group my-[0.1px] group-hover/sidebar:mt-[0.3px]'>
              <Link href={`/`}>
                  
                <Button variant='sidebar' className='block group-hover/sidebar:hidden'>
                  <ImBooks className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                </Button>

                <Button variant='sidebar' className='hidden group-hover/sidebar:flex'>
                  <ImBooks className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                  <span>Livros</span>
                </Button>

              </Link>
            </li>
            
            
            <li className='group my-[0.5px] group-hover/sidebar:mt-[0.2px]'>
              <Link href={`/`}>
                
                <Button variant='sidebar' className='block group-hover/sidebar:hidden'>
                  <IoInformationCircleOutline className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                </Button>

                <Button variant='sidebar' className='hidden group-hover/sidebar:flex'>
                  <IoInformationCircleOutline className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                  <span>Informações</span>
                </Button>

              </Link>
            </li>

            <Separator className='bg-primaryGray' />

          </ul>

          <ul className='text-gray-500 dark:text-gray-300 font-bold w-14 group-hover/sidebar:w-full flex flex-col gap-4 p-2'>
            <Separator className='bg-primaryGray' />
            
            <li className='group my-[0.5px] group-hover/sidebar:my-0'>
              <Link href={`/`}>

                <Button variant='sidebar' className='block group-hover/sidebar:hidden'>
                  <AiFillSetting className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                </Button>

                <Button variant='sidebar' className='hidden group-hover/sidebar:flex'>
                  <AiFillSetting className='text-2xl group-hover:text-primary dark:group-hover:text-primaryLighter' />
                  <span>Configurações</span>
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