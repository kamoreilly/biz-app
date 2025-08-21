"use client";
import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "@/components/logout-button";

export default function Dashboard() {
	const router = useRouter();
	const { data: session, isPending } = authClient.useSession();

	const privateData = useQuery(trpc.privateData.queryOptions());

	useEffect(() => {
		if (!session && !isPending) {
			router.push("/login");
		}
	}, [session, isPending, router]);

	if (isPending) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading dashboard...</p>
				</div>
			</div>
		);
	}

	if (!session) {
		return null; // Will redirect via useEffect
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
							<p className="text-sm text-gray-600">Welcome back, {session.user.name}</p>
						</div>
						<div className="flex items-center space-x-4">
							<span className="text-sm text-gray-600">{session.user.email}</span>
							<LogoutButton />
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-white rounded-lg shadow p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
						<div className="space-y-2">
							<p><span className="font-medium">Name:</span> {session.user.name}</p>
							<p><span className="font-medium">Email:</span> {session.user.email}</p>
							<p><span className="font-medium">Status:</span> <span className="text-green-600">Active</span></p>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Authentication Status</h2>
						<p className="text-green-600">✓ Successfully authenticated</p>
						<p className="text-sm text-gray-600 mt-2">Your session is secure and encrypted</p>
					</div>

					<div className="bg-white rounded-lg shadow p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Protected Data</h2>
						{privateData.isLoading ? (
							<p>Loading protected data...</p>
						) : privateData.error ? (
							<p className="text-red-600">Error loading protected data</p>
						) : (
							<p>{privateData.data?.message}</p>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
