import { useRouter } from 'next/router';
import React, { useState } from 'react';

export interface IPostDetailPageProps {}

export default function PostDetailPage(props: IPostDetailPageProps) {
	const router = useRouter();
	return (
		<div>
			<h1>Post Detail page</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	);
}
