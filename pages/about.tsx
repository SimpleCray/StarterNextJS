import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@components/common/header';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext } from 'next';

export interface AboutPageProps {}

// const Header = dynamic(() => import('@components/common/header'), { ssr: false })

export default function AboutPage(props: AboutPageProps) {
	const router = useRouter();
	const [postList, setPostList] = useState([]);
	const page = router.query?.page;

	useEffect(() => {
		if (!page) return;
		(async () => {
			const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
			const data = await response.json();
			setPostList(data.data);
		})();
	}, [page]);

	const handleNextClick = () => {
		router.push(
			{
				pathname: '/about',
				query: {
					page: (Number(router.query?.page) || 1) + 1,
				},
			},
			undefined,
			{ shallow: true }
		);
	};

	return (
		<div>
			<h1>About page</h1>
			<Header />
			<ul>
				{postList.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<button onClick={handleNextClick}>Next page</button>
		</div>
	);
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async (
	context: GetStaticPropsContext
) => {
	// Run on server at build time
	console.log('[about page] Get static props');

	return {
		props: {},
	};
};
