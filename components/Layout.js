import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen mx-auto justify-content items-center px-4 h-full sm:px-6 lg:px-8">
			<Navigation />
			<main className="w-full flex-1 flex">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
