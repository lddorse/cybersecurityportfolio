import FixedCardLayout from "../components/FixedCardLayout";

const ContactPage = () => {
  return (
    <FixedCardLayout>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Got a question, idea, or opportunity? Feel free to reach out — I'm always up for connecting with creative, technical, or curious minds.
      </p>

      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold text-gray-900 dark:text-gray-200">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-900 dark:text-gray-200">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold text-gray-900 dark:text-gray-200">Message</label>
          <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <p className="mb-1 font-semibold text-gray-900 dark:text-gray-200">Email:</p>
        <p className="mb-4 text-blue-600 dark:text-blue-400">leodamiandorsey@gmail.com</p>

        <p className="mb-1 font-semibold text-gray-900 dark:text-gray-200">LinkedIn:</p>
        <a href="https://www.linkedin.com/in/leo-dorsey-2a8ab8281/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/leo-dorsey
        </a>

        <p className="mt-4 mb-1 font-semibold text-gray-900 dark:text-gray-200">GitHub:</p>
        <a href="https://github.com/lddorse" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
          github.com/lddorse
        </a>

        <p className="mt-4 mb-1 font-semibold text-gray-900 dark:text-gray-200">Download Résumé:</p>
        <a href="/LeoDorsey_OnePage_Cybersecurity_Resume.pdf" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300" download>
          LeoDorsey_Cybersecurity_Resume.pdf
        </a>
      </div>
    </FixedCardLayout>
  );
};

export default ContactPage;
