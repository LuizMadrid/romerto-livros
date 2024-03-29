import * as React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/Theme-provider';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ 
	subsets: ['latin'],
	weight: '500'
});

export const metadata: Metadata = {
	title: 'Romerto Livros',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<body className={roboto.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>

						<div className='bg-primaryWhite dark:bg-primaryDark bg-background-white dark:bg-background-dark'>
							{children}
						</div>
            
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
