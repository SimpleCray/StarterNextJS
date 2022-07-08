import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface IPostListPageProps {
	posts: any[];
}

export default function PostListPage({ posts }: IPostListPageProps) {
	return (
		<div>
			<h1>Post List page</h1>

			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

export const getStaticProps: GetStaticProps<IPostListPageProps> = async (
	context: GetStaticPropsContext
) => {
	// Run on server at build time
	// console.log('static props');
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			posts: data.data,
		},
	};
};
