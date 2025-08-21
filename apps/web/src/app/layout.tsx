import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // Regular, Medium, Semibold, Bold
	display: "swap",
});

export const metadata: Metadata = {
	title: "Biz-App - Empower Your Small Business Growth",
	description: "The all-in-one platform that streamlines operations, enhances client relationships, and provides actionable insights for sustainable small business growth. Built specifically for freelancers, consultants, and growing teams.",
	keywords: [
		"small business management",
		"client management",
		"project tracking",
		"financial management",
		"tax analytics",
		"business intelligence",
		"freelancer tools",
		"consultant software",
		"business automation"
	],
	authors: [{ name: "Biz-App Team" }],
	creator: "Biz-App",
	publisher: "Biz-App",
	openGraph: {
		title: "Biz-App - Empower Your Small Business Growth",
		description: "The all-in-one platform that streamlines operations, enhances client relationships, and provides actionable insights for sustainable small business growth.",
		url: "https://biz-app.com",
		siteName: "Biz-App",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Biz-App - Empower Your Small Business Growth",
		description: "The all-in-one platform that streamlines operations, enhances client relationships, and provides actionable insights for sustainable small business growth.",
		creator: "@bizapp",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} font-sans antialiased`}
			>
				<Providers>
					<div className="grid grid-rows-[auto_1fr] h-svh">
						<Header />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
