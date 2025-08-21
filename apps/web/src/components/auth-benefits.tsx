interface AuthBenefitsProps {
  variant?: "signup" | "login";
}

export default function AuthBenefits({ variant = "signup" }: AuthBenefitsProps) {
  const benefits = [
    {
      icon: (
        <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      text: "30-day free trial"
    },
    {
      icon: (
        <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      text: "No credit card required"
    },
    {
      icon: (
        <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      text: "Cancel anytime"
    }
  ];

  const signupFeatures = [
    "All-in-one business management",
    "Client & project tracking",
    "Automated invoicing & payments",
    "Financial insights & tax analytics"
  ];

  return (
    <div className="space-y-6">
      {/* Trust Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-8 text-sm text-gray-500 dark:text-gray-400">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-x-2">
            {benefit.icon}
            {benefit.text}
          </div>
        ))}
      </div>

      {/* Value Propositions for Signup */}
      {variant === "signup" && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-3">
            What you'll get with Biz-App:
          </h3>
          <ul className="space-y-2">
            {signupFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-x-2 text-sm text-blue-800 dark:text-blue-200">
                <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Social Proof */}
      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Trusted by thousands of small businesses worldwide
        </p>
        <div className="flex items-center justify-center mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">4.9/5 rating</span>
        </div>
      </div>
    </div>
  );
}
