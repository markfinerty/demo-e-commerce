export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info & Aesthetic */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase">
              Establish{" "}
              <span className="text-[#ea7bdf] drop-shadow-[0_0_10px_rgba(234,123,223,0.3)]">
                Contact
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have questions about the API integration or the UI architecture?
              Reach out and our system will route your transmission. This app is not about the interface, but about the deployment thereof to the cloud.
            </p>
          </div>

          {/* Terminal Style Contact Cards */}
          <div className="space-y-4">
            {[
              {
                label: "Location",
                value: "Digital Space / Remote",
                icon: "🌐",
              },
              { label: "Response Time", value: "< 24 Hours", icon: "⚡" },
              { label: "Status", value: "Accepting Commissions", icon: "🟢" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#2d2d2d]/50 p-4 rounded-xl border border-gray-800 group hover:border-[#ea7bdf]/50 transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold text-[#ea7bdf] uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-white font-mono">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="relative group">
          {/* Decorative Background Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-[#ea7bdf] to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <form className="relative bg-[#2d2d2d] border border-gray-800 p-8 rounded-2xl space-y-6 shadow-2xl">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Identity
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#1a1a1a] border border-gray-700 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#ea7bdf] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Frequency
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1a1a1a] border border-gray-700 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#ea7bdf] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Transmission
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="w-full bg-[#1a1a1a] border border-gray-700 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#ea7bdf] focus:border-transparent outline-none transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <button className="group relative w-full overflow-hidden py-4 rounded-xl font-black bg-[#ea7bdf] text-white uppercase tracking-widest hover:shadow-[0_0_30px_rgba(234,123,223,0.4)] transition-all">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
