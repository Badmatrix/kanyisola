import { Fredoka, Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
	display: "swap",

	subsets: ["latin"],
});

const fredoka = Fredoka({
	display: "swap",
	subsets: ["latin"],
});

export const metadata = {
	title: "Happy birthday 🎈⚡",
	description: "Birthday girl",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${fredoka.className} ${caveat.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
