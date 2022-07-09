import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export interface IPostDetailPageProps {
	post: any;
}

export default function PostDetailPage({ post }: IPostDetailPageProps) {
	const router = useRouter();
	console.log('post')
	console.log(post)

	// For fallback: true
	// if (router.isFallback) return <div style={{fontSize: 30, textAlign: 'center'}}>Loading</div>

	if (!post) return null;
	return (
		<div>
			<h1>Post Detail page</h1>

			<p>{post.title}</p>
			<p>{post.author}</p>
			<p>{post.description}</p>
		</div>
	);
}

// Run on server at build time
export const getStaticPaths: GetStaticPaths = async () => {
	console.log('\ngetStaticPaths');
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await response.json();
	return {
		paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
		fallback: false,
		// fallback: 'blocking', // will wait for a page to be generated
		// fallback: true, // will set a isFallback true status to handle in client
	};
};

// Run on server at build time
export const getStaticProps: GetStaticProps<IPostDetailPageProps> = async (
	context: GetStaticPropsContext
) => {
	console.log('\ngetStaticProps', context.params?.postId);
	const postId = context.params?.postId;
	if (!postId) return { notFound: true };
	// console.log('static props');
	const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			post: data,
		},
		revalidate: 60,
	};
};
