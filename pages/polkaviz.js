import Head from "next/head";
import dynamic from "next/dynamic";

const PolkaViz = dynamic(() => import("../components/polkaviz"), {
	ssr: false,
});

export default function Polkaviz() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center py-2">
			<Head>
				<title>PolkaViz</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PolkaViz />
		</div>
	);
}
