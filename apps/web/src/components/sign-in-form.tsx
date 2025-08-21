import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import AuthLayout from "./auth-layout";
import AuthBenefits from "./auth-benefits";
import Link from "next/link";

export default function SignInForm({
	onSwitchToSignUp,
}: {
	onSwitchToSignUp?: () => void;
}) {
	const router = useRouter();
	const { isPending } = authClient.useSession();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signIn.email(
				{
					email: value.email,
					password: value.password,
				},
				{
					onSuccess: () => {
						router.push("/dashboard");
						toast.success("Welcome back! You've been signed in successfully.");
					},
					onError: (error) => {
						let errorMessage = error.error.message || error.error.statusText;
						
						// Handle specific error cases
						if (error.error.statusCode === 401) {
							errorMessage = "Invalid email or password";
						} else if (error.error.statusCode === 429) {
							errorMessage = "Too many failed attempts. Please try again in 15 minutes.";
						} else if (error.error.statusCode === 423) {
							errorMessage = "Account locked due to too many failed attempts. Please try again later.";
						}
						
						toast.error(errorMessage);
					},
				},
			);
		},
		validators: {
			onSubmit: z.object({
				email: z.email("Invalid email address"),
				password: z.string().min(8, "Password must be at least 8 characters"),
			}),
		},
	});

	if (isPending) {
		return (
			<AuthLayout title="Signing You In" subtitle="Please wait while we verify your credentials">
				<div className="flex justify-center py-8">
					<Loader />
				</div>
			</AuthLayout>
		);
	}

	return (
		<AuthLayout
			title="Welcome Back"
			subtitle="Sign in to your Biz-App account to continue managing your business"
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-6"
			>
				<div className="space-y-5">
					<form.Field name="email">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
									Email Address
								</Label>
								<Input
									id={field.name}
									name={field.name}
									type="email"
									placeholder="you@yourbusiness.com"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									className="h-11"
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-sm text-red-600 dark:text-red-400">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>

					<form.Field name="password">
						{(field) => (
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<Label htmlFor={field.name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
										Password
									</Label>
									<Link
										href="/forgot-password"
										className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
									>
										Forgot password?
									</Link>
								</div>
								<Input
									id={field.name}
									name={field.name}
									type="password"
									placeholder="Enter your password"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									className="h-11"
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-sm text-red-600 dark:text-red-400">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</div>

				<form.Subscribe>
					{(state) => (
						<Button
							type="submit"
							size="lg"
							className="w-full h-12 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium"
							disabled={!state.canSubmit || state.isSubmitting}
						>
							{state.isSubmitting ? (
								<>
									<svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
										<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Signing you in...
								</>
							) : (
								"Sign In"
							)}
						</Button>
					)}
				</form.Subscribe>
			</form>

			{/* Benefits Section */}
			<div className="mt-8">
				<AuthBenefits variant="login" />
			</div>

			{/* Sign Up Link */}
			<div className="mt-6 text-center">
				{onSwitchToSignUp ? (
					<Button
						variant="link"
						onClick={onSwitchToSignUp}
						className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					>
						Don't have an account? Start free trial
					</Button>
				) : (
					<p className="text-sm text-gray-600 dark:text-gray-400">
						Don't have an account?{" "}
						<Link href="/signup" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
							Start free trial
						</Link>
					</p>
				)}
			</div>
		</AuthLayout>
	);
}
