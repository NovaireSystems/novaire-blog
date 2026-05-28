export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl w-full px-6">
        <h1 className="text-5xl font-bold mb-8">
          Contact
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg"
          />

          <textarea
            placeholder="Tell us about your project"
            rows={6}
            className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg"
          />

          <button
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}