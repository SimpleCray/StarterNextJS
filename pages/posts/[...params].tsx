import { useRouter } from 'next/router';
import React, { useState } from 'react';

export interface IParamsPageProps {}

export default function ParamsPage(props: IParamsPageProps) {
	const router = useRouter();
	return (
		<div>
			<h1>Params page</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	);
}
