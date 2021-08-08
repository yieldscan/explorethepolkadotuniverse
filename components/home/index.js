import { useRouter } from "next/dist/client/router";

const LandingPage = () => {
	const router = useRouter();
	return (
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
				<button
					className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-500 focus:text-pink-500"
					onClick={() => router.push("/polkaviz")}
				>
					<h3 className="text-2xl font-bold">Polkadot &rarr;</h3>
				</button>
				<button
					className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-500 focus:text-pink-500"
					onClick={() => router.push("/polkaviz")}
				>
					<h3 className="text-2xl font-bold">Kusama &rarr;</h3>
				</button>
			</div>
		</main>
	);
};
export default LandingPage;
