'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/common/Button';

import { PiArrowBendUpLeftDuotone, PiGoogleLogoDuotone, PiFacebookLogoDuotone } from 'react-icons/pi';

export const Login = () => {
	return (
		<div className="flex w-screen h-screen">

			<div className='flex flex-[50%]'>
				<div className="absolute top-8 left-8">
					<Link href="/home" passHref>
						<Button
							variant='empty'
							className="text-base flex items-center justify-center gap-2 font-bold px-4 py-2 rounded-md text-primaryDark dark:text-primaryWhite hover:bg-gray-400/20 transition-all hover:transition-all">
							<PiArrowBendUpLeftDuotone /> Página Inicial
						</Button>
					</Link>
				</div>

				<form className="h-full w-full gap-1 flex items-center justify-center flex-col px-10">
					<h1 className="text-3xl 2sm:text-4xl pb-2 font-semibold text-primaryDark dark:text-primaryWhite">Entre</h1>

					<div className="my-5 flex gap-4">
						<Button 
							variant='icon'
							className='hover:text-primaryDark dark:hover:text-primaryWhite'>
							<PiGoogleLogoDuotone className="text-xl 2sm:text-xl xl:text-3xl" />
						</Button>

						<Button 
							variant='icon'
							className='hover:text-primaryDark dark:hover:text-primaryWhite'>
							<PiFacebookLogoDuotone className="text-xl 2sm:text-xl xl:text-3xl" />
						</Button>
					</div>

					<span className="text-sm cursor-default p-2 text-gray-400 dark:text-gray-500">
						Conecte-se com seu e-mail e senha!
					</span>

					<input
						type="text"
						placeholder="E-mail"
						className="text-xs rounded-lg w-full 2sm:w-3/4 md:w-3/5 2md:w-4/5 xl:w-3/5 file:border-none outline-none p-4 my-4 mx-0 bg-gray-200/60 dark:bg-gray-200/20"
					/>

					<input
						type="password"
						placeholder="Senha"
						className="text-xs rounded-lg w-full 2sm:w-3/4 md:w-3/5 2md:w-4/5 xl:w-3/5 file:border-none outline-none p-4 my-4 mx-0 bg-gray-200/60 dark:bg-gray-200/20"
					/>

					{/* <RegisterCredentialsUser /> */}


					<Button variant="login">
						Entrar
					</Button>

				</form>
			</div>
			
			<div className="flex flex-[50%] justify-center items-center">
				<div className="h-full w-full flex justify-center items-center flex-col rounded-l-full bg-gradient-to-br from-colorPrimaryLighter to-colorPrimaryDarker">

					<h1 className="text-4xl font-semibold text-white">
						Seja Bem-vindo de volta!
					</h1>

					<p className="text-base leading-5 mx-0 my-5 text-white">
						Novos livros e análises estão sempre aqui!
					</p>

					<Image
						src="/Logo Branco.png"
						width={360}
						height={360}
						quality={100}
						alt="Logo"
						className="absolute opacity-15"
					/>
				</div>
			</div>

		</div>

	);
};