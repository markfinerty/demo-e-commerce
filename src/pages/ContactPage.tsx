export default function Contact() {
  return (
    <div className="max-w-md mx-auto py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Drop a line</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#2d2d2d] border border-gray-700 p-4 rounded-lg text-white focus:border-[#ea7bdf] outline-none transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#2d2d2d] border border-gray-700 p-4 rounded-lg text-white focus:border-[#ea7bdf] outline-none transition-colors"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-[#2d2d2d] border border-gray-700 p-4 rounded-lg text-white focus:border-[#ea7bdf] outline-none transition-colors"
        />
        <button className="w-full py-4 rounded-lg font-bold bg-[#ea7bdf] text-white hover:bg-[#d46ac9] transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}
