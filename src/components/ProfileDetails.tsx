'use client';

import React from 'react';
import Image from 'next/image';

import { ModeToggle } from './ToggleTheme';
// import Button from '@/components/Button';

const ProfileDetails = () => {
	return (
		<>
			<div className='flex justify-center items-center text-white gap-4 mt-6'>

				{/* <AiOutlineMenu onClick={(e) => handleDropdownFocus(open)} className="cursor-pointer text-xl" />
        
        {menuIsOpen && (
          <div className="z-50 absolute top-[66px] right-28 2xl:right-11 bg-white rounded-lg shadow-md gap-4 dark:bg-darkBGLighter after:border-l-[10px] after:border-r-[10px] after:border-t-[10px] after:border-transparent after:border-t-white dark:after:border-t-darkBGLighter after:absolute after:rotate-180 after:-top-2 after:left-20 2xl:after:left-2">

            <ul className="flex flex-col items-end 2xl:items-start justify-end p-2">
              {id_prestador != undefined && planoAtivo != undefined && (
                <div>
                  <li className="group">
                    <Link onClick={handleClickOpen} href={""}>
                      <Button
                        onClick={hidennMenu}
                        variant="dropbar">

                        <AiFillStar className="text-xl text-center text-primary dark:text-primaryLighter" />
                        <span className="text-lg">Avaliar</span>
                      </Button>
                    </Link>
                  </li>
                </div>
              )}

              <li className="group w-full">
                <Button
                  variant="dropbar"
                  onClick={() => {
                    signOut({ redirect: false }).then(() => {
                      router.push("/"); // Redirect to the dashboard page after signing out
                    });
                  }}
                  className="">

                  <ImCancelCircle className="text-xl text-center text-primary dark:text-primaryLighter" />
                  <span className="text-lg">Logout</span>
                </Button>
              </li>
            </ul>

          </div>
        )} */}

				<ModeToggle className={'text-primaryGray dark:text-white hover:text-primaryGray dark:hover:text-white'} />
      
				<Image
					src={'/test_photo.jpeg'}
					width={40}
					height={40}
					className='rounded-full h-10 w-h-10 mx-auto'
					style={{
						objectFit: 'cover',
					}}
					alt='Imagem Usuário'
				/>
			</div>
		</>
	);
};

export default ProfileDetails;
