import { LayoutProps } from '@models/index';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({children}: LayoutProps) {
	return (
		<div>
			<h1>Main layout</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<div>{children}</div>
		</div>
	);
}
