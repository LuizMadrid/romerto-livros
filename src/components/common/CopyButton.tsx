'use client';

import React from 'react';

interface CopyButtonProps {
  children: React.ReactNode;
  textToCopy: string;
}

export const CopyButton = ({ children, textToCopy }: CopyButtonProps) => {

	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy);
	};
  
	return (
		<div onClick={handleCopy}>
			{children}
		</div>
	);
};
