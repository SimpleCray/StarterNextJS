import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EmptyLayout } from '@components/layout';
import { AppPropsWithLayout } from '@models/common';

// Custom Next App to prevent Layout unmouting on navigate
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
