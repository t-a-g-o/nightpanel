

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 pt-32 md:pt-20 bg-black text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-8">Last updated: [Insert Date]</p>
        
        <div className="text-left">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              Section 1 Title
            </h2>
            <p>This is a section where you can put information about your terms of service. Copy and paste this section to add more sections.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              Section 2 Title
            </h2>
            <p>This is a section where you can put some bullet points about your terms of service.</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Example bullet point</li>
              <li>Example bullet point</li>
              <li>Example bullet point</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}