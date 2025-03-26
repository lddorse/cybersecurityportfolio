import FixedCardLayout from "../components/FixedCardLayout";

const ContactPage = () => {
    return (
      <FixedCardLayout>
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="mb-6">
            Got a question, idea, or opportunity? Feel free to reach out — I'm always up for connecting with creative, technical, or curious minds.
          </p>
  
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
  
          <div className="mt-8">
            <p className="mb-1 font-semibold">Email:</p>
            <p className="mb-4 text-blue-600">leo@example.com</p>
  
            <p className="mb-1 font-semibold">LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/leo-dorsey-2a8ab8281/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/leo-dorsey
            </a>
  
            <p className="mt-4 mb-1 font-semibold">GitHub:</p>
            <a
              href="https://github.com/lddorse"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/lddorse
            </a>
  
            <p className="mt-4 mb-1 font-semibold">Download Résumé:</p>
            <a
              href="/LeoDorsey_Cybersecurity_Resume.pdf"
              className="text-blue-600 underline"
              download
            >
              LeoDorsey_Cybersecurity_Resume.pdf
            </a>
          </div>
          </FixedCardLayout>
    );
  };
  
  export default ContactPage;