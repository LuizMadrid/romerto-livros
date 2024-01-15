import * as React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'login' | 'sidebar';
}

function Button({ className, variant = 'primary', ...props }: ButtonProps) {
	const variantClasses = {
		primary: 'text-white py-2 px-4 text-sm gap-2 uppercase bg-colorPrimary border-2 border-transparent hover:bg-colorPrimaryDarker items-center justify-center',
		secondary: 'text-white py-2 px-4 text-sm gap-2 uppercase bg-colorSecondary hover:bg-colorSecondaryDarker items-center justify-center',
		outlined: 'text-black py-2 px-4 text-sm dark:text-white gap-2 uppercase bg-transparent border-2 border-black/50 dark:border-white/70 hover:bg-colorPrimary hover:border-colorPrimary dark:hover:border-colorPrimary hover:text-white items-center justify-center',
		login: 'text-white rounded-lg uppercase w-full 2sm:w-3/4 md:w-3/5 2md:w-4/5 xl:w-3/5 mt-4 cursor-pointer bg-colorPrimary hover:bg-colorPrimaryDarker tracking-wide py-3 px-11 items-center justify-center',
		sidebar: 'cursor-pointer p-2 gap-4 group-hover:bg-gray-400/20 rounded-lg w-full group-hover/sidebar:justify-start items-center',
	};

	const _className = twMerge(variantClasses[variant], 'flex appearance-none rounded-md font-semibold transition-all hover:transition-all', className);

	return (
		<button className={_className} {...props}>
		</button>
	);
}

export default Button;