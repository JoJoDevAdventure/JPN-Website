import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-4 md:mx-[150px] mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  alt="Service 1"
                  className="h-8 md:h-12 w-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold">Phone</h3>
                <p className="text-l md:text-xl">+123 456 789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#0D7685] text-white h-12 w-12 md:h-16 md:w-16 flex items-center text-center align-middle justify-center">
                <img
                  src="./email.svg"
                  alt="Service 1"
                  className="h-8 md:h-10 w-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold">Email</h3>
                <p className="text-l md:text-xl">contact@yourdomain.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#0D7685] text-white h-12 w-12 md:h-16 md:w-16 flex items-center text-center align-middle justify-center">
                <img
                  src="./loc.svg"
                  alt="Service 1"
                  className="h-8 md:h-12 w-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold">Location</h3>
                <p className="text-l md:text-xl">123 Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#0D7685] p-6 md:p-8 text-white">
          <form className="space-y-6">
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
              className="p-3 bg-white text-[#0D7685] border-2 border-white transition-colors duration-300 hover:bg-transparent hover:text-white w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
