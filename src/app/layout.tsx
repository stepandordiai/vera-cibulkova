import type { Metadata } from "next";
import { Urbanist, Ephesis } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { BASE_URL } from "@/lib/constants";
import "@/scss/globals.scss";

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ephesis = Ephesis({
	variable: "--font-ephesis",
	subsets: ["latin"],
	weight: ["400"],
});

// TODO: learn this
export const metadata: Metadata = {
	title: "Věra Cibulková | Finanční a realitní poradce – EDO Finance",
	description:
		"Hypotéky, investice a prodej nemovitostí na jednom místě. Věra Cibulková – certifikovaný finanční a realitní poradce EDO Finance v České republice. Bezplatná konzultace.",
	keywords: [
		"finanční poradce",
		"realitní poradce",
		"EDO Finance",
		"hypotéky",
		"investice",
		"prodej nemovitostí",
		"Věra Cibulková",
		"finanční poradenství",
		"realitní makléř",
		"pojištění",
	],
	metadataBase: new URL(BASE_URL),
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		title: "Věra Cibulková | Finanční a realitní poradce – EDO Finance",
		description:
			"Hypotéky, investice a prodej nemovitostí na jednom místě. Certifikovaný poradce EDO Finance. Bezplatná konzultace.",
		url: BASE_URL,
		siteName: "Věra Cibulková – EDO Finance",
		locale: "cs_CZ",
		type: "website",
		images: [
			{
				url: "/docs/screenshots/vera-cibulkova-ss-v1.jpg",
				width: 1200,
				height: 630,
				alt: "Věra Cibulková – Finanční a realitní poradce EDO Finance",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Věra Cibulková | Finanční a realitní poradce – EDO Finance",
		description:
			"Hypotéky, investice a prodej nemovitostí. Certifikovaný poradce EDO Finance. Bezplatná konzultace.",
		images: ["/docs/screenshots/vera-cibulkova-ss-v1.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="cs">
			<body className={`${urbanist.variable} ${ephesis.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
