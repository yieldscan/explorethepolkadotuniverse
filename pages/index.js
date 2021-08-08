import Head from "next/head";
import LandingPage from "../components/home";

export default function Home() {
	return (
		<div className="flex-1 flex flex-col items-center justify-content py-2">
			<Head>
				<title>Explore the Polkadot Universe</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LandingPage />
		</div>
	);
}
