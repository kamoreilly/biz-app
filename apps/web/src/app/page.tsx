import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" aria-label="Hero section">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Empower Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Small Business
              </span>{" "}
              Growth
            </h1>
            <p id="hero-description" className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              The all-in-one platform that streamlines operations, enhances client relationships,
              and provides actionable insights for sustainable business growth. Built specifically for small businesses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Link href="/signup" aria-describedby="hero-description">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Link href="#features" aria-describedby="hero-description">
                  Explore Features
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No setup fees
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section id="value-propositions" className="py-16 sm:py-24 lg:py-32" aria-label="Core value propositions">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader 
            title="Core Value Propositions"
            description="Built specifically for small businesses, Biz-App delivers solutions that address your unique challenges and grow with your success."
          />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3" role="list" aria-label="Value propositions list">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-medium leading-7 text-gray-900 dark:text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  All-in-One Solution
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Eliminates the need for multiple disparate tools by consolidating client management, project tracking, financial management, and tax analytics into one unified platform.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-medium leading-7 text-gray-900 dark:text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  Financial Intelligence
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Built-in tax analytics and profit tracking provide real-time financial insights, automated tax calculations, and comprehensive reporting to keep your business compliant and profitable.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-medium leading-7 text-gray-900 dark:text-white">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  Scalable Architecture
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Grows with your business needs without proportional increases in administrative complexity, enabling sustainable growth and operational efficiency.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32" aria-label="Business management features">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader 
            title="Comprehensive Business Management Features"
            description="Everything you need to manage your business efficiently, from client relationships to financial compliance."
          />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3" role="list" aria-label="Business management features list">
              <FeatureCard
                title="Client Lifecycle Management"
                description="Centralize all client information, communication history, and project portfolios in one secure location."
                features={[
                  "Complete contact information management",
                  "Communication history tracking", 
                  "Project portfolio monitoring",
                  "Client performance reports"
                ]}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />}
                iconColor="blue"
              />

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-green-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3-6h.008v.008H15.75V12zm0 3h.008v.008H15.75V15zm0 3h.008v.008H15.75V18zM6.75 6h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V8.25A2.25 2.25 0 016.75 6z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Project Management & Tracking</CardTitle>
                  <CardDescription>
                    Create projects with timelines, assign team members, and monitor profitability in real-time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Project timelines and milestones</li>
                    <li>• Team member assignment</li>
                    <li>• Real-time progress tracking</li>
                    <li>• Profitability monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Financial Management</CardTitle>
                  <CardDescription>
                    Create professional invoices, track expenses, and get comprehensive financial insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Professional invoice creation</li>
                    <li>• Payment tracking and reminders</li>
                    <li>• Expense categorization</li>
                    <li>• Financial reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-orange-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3-6h.008v.008H15.75V12zm0 3h.008v.008H15.75V15zm0 3h.008v.008H15.75V18zM6.75 6h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V8.25A2.25 2.25 0 016.75 6z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Tax Analytics & Compliance</CardTitle>
                  <CardDescription>
                    Automated expense categorization and real-time tax liability calculations to keep you compliant.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Automatic expense categorization</li>
                    <li>• Real-time tax calculations</li>
                    <li>• Quarterly and annual reporting</li>
                    <li>• Compliance tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Document Management</CardTitle>
                  <CardDescription>
                    Secure storage and organization of contracts, receipts, and important business documents.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Secure document storage</li>
                    <li>• Version control and access management</li>
                    <li>• Quick search and retrieval</li>
                    <li>• Automated backup features</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-teal-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Business Intelligence</CardTitle>
                  <CardDescription>
                    Performance dashboards and KPI tracking to make data-driven decisions for business growth.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Performance dashboards</li>
                    <li>• KPI tracking and analysis</li>
                    <li>• Trend analysis and forecasting</li>
                    <li>• Custom report generation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section id="target-market" className="py-24 sm:py-32 bg-white dark:bg-gray-950" aria-label="Target market and business types">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader 
            title="Built for Small Business Success"
            description="Whether you're a freelancer, consultant, or growing agency, Biz-App adapts to your unique business needs."
          />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600 mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Freelancers & Consultants</CardTitle>
                  <CardDescription>
                    Perfect for independent professionals managing multiple clients and projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Streamlined client onboarding</li>
                    <li>• Project profitability tracking</li>
                    <li>• Automated invoicing and payments</li>
                    <li>• Tax-ready financial reports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-green-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Small Teams & Agencies</CardTitle>
                  <CardDescription>
                    Ideal for growing businesses with 2-50 employees needing operational structure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Team collaboration tools</li>
                    <li>• Role-based access control</li>
                    <li>• Multi-project management</li>
                    <li>• Standardized workflows</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-600 mb-4" aria-hidden="true">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-medium">Service-Based Businesses</CardTitle>
                  <CardDescription>
                    Designed for businesses providing professional services to clients.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Service delivery tracking</li>
                    <li>• Client portal access</li>
                    <li>• Recurring billing management</li>
                    <li>• Performance analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section id="success-metrics" className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32" aria-label="Success metrics and proven results">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader 
            title="Proven Results for Small Businesses"
            description="Join thousands of businesses already achieving measurable improvements with Biz-App."
          />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-semibold text-blue-600 dark:text-blue-400">40%</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Reduction in Administrative Overhead</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Save 15-20 hours weekly on manual tasks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-green-600 dark:text-green-400">90%</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Feature Utilization Rate</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Within 3 months of implementation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-purple-600 dark:text-purple-400">50%</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Faster Payment Collection</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Improved cash flow management</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-orange-600 dark:text-orange-400">100%</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Financial Visibility</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Real-time insights and reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 sm:py-32 bg-white dark:bg-gray-950" aria-label="Customer testimonials">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader 
            title="What Our Users Say"
            description="Real stories from small business owners who transformed their operations with Biz-App."
          />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-400 mb-4">
                    "Biz-App reduced my administrative overhead by 40% and helped me gain clarity on my financials.
                    I now have more time to focus on growing my business instead of managing spreadsheets."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                      S
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 dark:text-white">Sarah K.</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Marketing Consultant</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <TestimonialCard
                quote="As my creative agency grew, Biz-App helped standardize our workflows and gave us complete visibility into project profitability. It's been a complete game changer for our operations."
                authorName="Mike T."
                authorTitle="Creative Agency Owner"
                authorInitial="M"
                avatarColor="green"
              />

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-400 mb-4">
                    "The integrated tax analytics saved me hundreds in accounting fees. I can now track
                    my tax obligations in real-time and plan accordingly. Highly recommended!"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                      L
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 dark:text-white">Lisa R.</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">IT Support Services</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-gray-900 py-24 sm:py-32" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of businesses already benefiting from Biz-App. Start your free trial today and experience
              the difference of a platform built specifically for small business success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Link href="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Link href="#features">
                  Schedule a Demo
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}