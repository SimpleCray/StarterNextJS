import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode;
}


// Must return a ReactElement because ReactNode maybe a string, number or null
export type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
