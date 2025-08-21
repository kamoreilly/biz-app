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

export default function SignUpForm({
	onSwitchToSignIn,
}: {
	onSwitchToSignIn?: () => void;
}) {
	const router = useRouter();
	const { isPending } = authClient.useSession();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{
					email: value.email,
					password: value.password,
					name: value.name,
				},
				{
					onSuccess: () => {
						router.push("/dashboard");
						toast.success("Welcome to Biz-App! Your account has been created successfully.");
					},
					onError: (error) => {
						let errorMessage = error.error.message || error.error.statusText;
						
						// Handle specific error cases
						if (error.error.statusCode === 409) {
							errorMessage = "An account with this email already exists.";
						} else if (error.error.statusCode === 400) {
							if (error.error.message?.includes("password")) {
								errorMessage = "Password does not meet complexity requirements.";
							}
						}
						
						toast.error(errorMessage);
					},
				},
			);
		},
		validators: {
			onSubmit: z.object({
				name: z.string().min(2, "Name must be at least 2 characters"),
				email: z.email("Invalid email address"),
				password: z.string()
					.min(8, "Password must be at least 8 characters")
					.regex(/[a-z]/, "Password must contain at least one lowercase letter")
					.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
					.regex(/[0-9]/, "Password must contain at least one number"),
			}),
		},
	});

	if (isPending) {
		return (
			<AuthLayout title="Creating Your Account" subtitle="Please wait while we set up your business management platform">
				<div className="flex justify-center py-8">
					<Loader />
				</div>
			</AuthLayout>
		);
	}

	return (
		<AuthLayout
			title="Start Your Free Trial"
			subtitle="Join thousands of small businesses growing with Biz-App"
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
					<form.Field name="name">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
									Full Name
								</Label>
								<Input
									id={field.name}
									name={field.name}
									placeholder="Enter your full name"
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

					<form.Field name="email">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
									Business Email
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
								<Label htmlFor={field.name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
									Password
								</Label>
								<Input
									id={field.name}
									name={field.name}
									type="password"
									placeholder="Create a secure password"
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
								<div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
									<p>Password requirements:</p>
									<ul className="list-disc list-inside space-y-0.5">
										<li className={field.state.value.length >= 8 ? "text-green-600" : ""}>
											At least 8 characters
										</li>
										<li className={/[a-z]/.test(field.state.value) ? "text-green-600" : ""}>
											One lowercase letter
										</li>
										<li className={/[A-Z]/.test(field.state.value) ? "text-green-600" : ""}>
											One uppercase letter
										</li>
										<li className={/[0-9]/.test(field.state.value) ? "text-green-600" : ""}>
											One number
										</li>
									</ul>
								</div>
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
									Creating your account...
								</>
							) : (
								"Start Free Trial"
							)}
						</Button>
					)}
				</form.Subscribe>
			</form>

			{/* Benefits Section */}
			<div className="mt-8">
				<AuthBenefits variant="signup" />
			</div>

			{/* Sign In Link */}
			<div className="mt-6 text-center">
				{onSwitchToSignIn ? (
					<Button
						variant="link"
						onClick={onSwitchToSignIn}
						className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					>
						Already have an account? Sign in
					</Button>
				) : (
					<p className="text-sm text-gray-600 dark:text-gray-400">
						Already have an account?{" "}
						<Link href="/login" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
							Sign in
						</Link>
					</p>
				)}
			</div>

			{/* Terms and Privacy */}
			<div className="mt-6 text-center">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					By creating an account, you agree to our{" "}
					<Link href="/terms" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link href="/privacy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
						Privacy Policy
					</Link>
				</p>
			</div>
		</AuthLayout>
	);
}
