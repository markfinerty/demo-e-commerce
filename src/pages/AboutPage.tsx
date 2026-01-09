export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-black text-white mb-8 border-l-4 border-[#ea7bdf] pl-6 uppercase tracking-tight">
          The Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed text-lg">
          <p>
            We operate in the space between functionality and art. Our goal is
            to provide users with a high-performance experience that feels
            alive, blending brutalist design with modern fluidity.
          </p>
          <p>
            By utilizing a deep grayscale palette with neon highlights, we
            reduce eye strain while maintaining a futuristic, high-tech identity
            that demands attention.
          </p>
        </div>
      </section>

      {/* Project Disclaimer Section */}
      <section className="mb-20 bg-[#2d2d2d] border border-gray-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="bg-[#ea7bdf]/10 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#ea7bdf]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Developer Note
            </h3>
            <p className="text-gray-400 leading-relaxed">
              This is a{" "}
              <span className="text-white font-semibold">
                technical demonstration
              </span>{" "}
              of a modern e-commerce storefront. All product data, including
              titles, descriptions, and imagery, is dynamically fetched from the
              <code className="text-[#ea7bdf] mx-1 bg-[#1a1a1a] px-2 py-1 rounded">
                DummyJSON API
              </code>
              . No actual transactions take place, and no user data is
              permanently stored.
            </p>
          </div>
        </div>
      </section>

      {/* Features/Tech Grid */}
      <section>
        <h3 className="text-xl font-black text-[#ea7bdf] mb-8 uppercase tracking-[0.3em]">
          Built With
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Frontend", tech: "React.js" },
            { label: "Styling", tech: "Tailwind CSS" },
            { label: "Routing", tech: "React Router" },
            { label: "Data", tech: "REST API" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-[#ea7bdf]/40 transition-colors"
            >
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                {item.label}
              </p>
              <p className="text-white font-mono">{item.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-24 text-center">
        <p className="text-gray-500 mb-4 italic">
          Interested in the source code?
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-[#ea7bdf] text-[#ea7bdf] px-8 py-3 rounded-full font-bold hover:bg-[#ea7bdf] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(234,123,223,0.2)]"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
