import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 pt-32 md:pt-20 bg-black text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-8">Last updated: January 1, 2000</p>
        
        <div className="text-left">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              1. Heres one section
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              2. This is another one
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>

          <div className="flex justify-center mt-8">
            <Link href="/" className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}