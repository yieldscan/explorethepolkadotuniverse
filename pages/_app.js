import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
