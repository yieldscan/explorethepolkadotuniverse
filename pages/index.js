import Head from "next/head";

export default function Home() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center py-2">
			<Head>
				<title>Explore the Polkadot Universe</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">
					Visualisations around{" "}
					<a
						className="text-pink-500"
						href="https://polkadot.network/"
						target="_blank"
					>
						Polkadot
					</a>{" "}
					Ecosystem
				</h1>

				<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
					<a
						// href="https://nextjs.org/docs"
						className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-500 focus:text-pink-500"
					>
						<h3 className="text-2xl font-bold">Polkadot &rarr;</h3>
					</a>

					<a
						// href="https://nextjs.org/learn"
						className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-500 focus:text-pink-500"
					>
						<h3 className="text-2xl font-bold">Kusama &rarr;</h3>
					</a>
				</div>
			</main>
		</div>
	);
}
