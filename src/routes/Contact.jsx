import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSending(true);

    const form = e.target;
    const formData = new FormData(form);

    // Append access key for email submission
    formData.append("access_key", "ac797195-c56a-42dc-924f-ff1ded2a8d6d");

    try {
      // Submit to Web3Forms for email
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const emailData = await emailResponse.json();

      // Check response from Web3Forms
      if (emailData.success) {
        setMessage("Message sent successfully!");
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
        }, 5000);
        form.reset();
      } else {
        setMessage("Message not sent, try again later.");
        throw new Error(emailData.message);
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="mx-4 md:mx-[150px] mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6">
        {/* Left Section */}
        <div className="space-y-2 md:space-y-8">
          <p className="text-lg md:text-xl">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D7685] mb-2">
            Get in touch with us
          </h1>
          <p className="text-lg md:text-xl md:mb-8">
            We encourage you to get in touch with us for any inquiries or
            questions. We're here to help and provide the information you need.
          </p>

          <div className="space-y-2 md:space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#0D7685] text-white h-12 w-12 md:h-16 md:w-16 flex items-center text-center align-middle justify-center">
                <img
                  src="./phone.svg"
                  alt="Phone"
                  className="h-8 md:h-12 w-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-[#0D7685]">Phone</h3>
                <p className="text-l md:text-xl">725-724-9681</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#0D7685] text-white h-12 w-12 md:h-16 md:w-16 flex items-center text-center align-middle justify-center">
                <img
                  src="./email.svg"
                  alt="Email"
                  className="h-7 md:h-10 w-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-[#0D7685]">Email</h3>
                <p className="text-l md:text-xl">lasvegas@jpn-ent.net</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#0D7685] text-white h-12 w-12 md:h-16 md:w-16 flex items-center text-center align-middle justify-center">
                <img
                  src="./loc.svg"
                  alt="Location"
                  className="h-8 md:h-12 w-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-[#0D7685]">Location</h3>
                <p className="text-l md:text-xl">2117 Lookout Point Circle, Las Vegas, NV 89117, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#0D7685] p-6 md:p-8 text-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className="text-lg" htmlFor="name">
                Name
              </label>
              <input
                className="p-3 bg-white text-black"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 bg-white text-black"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg" htmlFor="number">
                Phone Number
              </label>
              <input
                className="p-3 bg-white text-black"
                type="text"
                id="number"
                name="number"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-3 bg-white text-black"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              className={`p-3 bg-white text-[#0D7685] border-2 border-white transition-colors duration-300 hover:bg-transparent hover:text-white w-full ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Modal for message status */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-semibold mb-4 text-[#0D7685]">{message}</h1>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#0D7685] text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;