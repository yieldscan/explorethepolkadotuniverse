import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
