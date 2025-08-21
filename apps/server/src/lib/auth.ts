import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "../db";

export const auth = betterAuth({
	database: mongodbAdapter(client),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
		passwordValidation: {
			minLength: 8,
			requireUppercase: true,
			requireLowercase: true,
			requireNumber: true,
			requireSpecialChar: false,
		},
		bruteForceProtection: {
			enabled: true,
			maxAttempts: 5,
			lockoutTime: 15 * 60, // 15 minutes in seconds
		},
	},
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
});
