"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const navigationLinks = [
		{ to: "/#features", label: "Features" },
		{ to: "/#testimonials", label: "Testimonials" },
		{ to: "/dashboard", label: "Dashboard" },
	];
	
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	
	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4">
				{/* Logo and Brand */}
				<div className="flex items-center space-x-2">
					<Link href="/" className="flex items-center space-x-2">
						<div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
							<svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
							</svg>
						</div>
						<span className="text-xl font-bold text-gray-900 dark:text-white">
							Biz-App
						</span>
					</Link>
				</div>

				{/* Navigation Links - Desktop */}
				<nav className="hidden md:flex items-center space-x-8">
					{navigationLinks.map(({ to, label }) => (
						<Link
							key={to}
							href={to}
							className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-sm"
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Right Side Actions */}
				<div className="flex items-center space-x-4">
					<div className="hidden sm:flex items-center space-x-2">
						<ModeToggle />
					</div>
					<UserMenu />
					
					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="sm"
						className="md:hidden"
						onClick={handleMenuToggle}
						aria-label="Toggle navigation menu"
						aria-expanded={isMenuOpen}
					>
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</Button>
				</div>
			</div>
			
			{/* Mobile Navigation Menu */}
			<div
				className={cn(
					"md:hidden fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-300 ease-in-out",
					isMenuOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-full pointer-events-none"
				)}
			>
				<nav className="container px-4 py-6">
					<div className="flex flex-col space-y-4">
						{navigationLinks.map(({ to, label }) => (
							<Link
								key={to}
								href={to}
								onClick={handleLinkClick}
								className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-sm px-2 py-1"
							>
								{label}
							</Link>
						))}
						<div className="pt-4 border-t border-border">
							<div className="flex items-center space-x-2">
								<ModeToggle />
								<span className="text-sm text-muted-foreground">Theme</span>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
