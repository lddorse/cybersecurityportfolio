import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7z5ibdm",
      "template_yttdmsk",
      form.current,
      "LAMhapUdhUW-woZXJ"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="bg-gray-100 mt-6 px-4 py-6 rounded-lg shadow text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-3 text-sm">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-1 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-1 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows="3"
            required
            className="w-full px-3 py-1 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
