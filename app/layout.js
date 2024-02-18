import "./globals.css";
import "./Components/List/list.css";
import Providers from "./providers";

export const metadata = {
	title: "GetItDone",
	description: "A to-do list",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
