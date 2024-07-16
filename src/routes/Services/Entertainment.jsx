import React from "react";
import ContactWithColour from "../../components/ContactWithColour";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Entertainment = () => {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div className="mx-4 md:mx-[150px] mt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0D7685] mb-8 md:mb-12 text-center">
          Entertainment Services
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Enhance your conventions, business conferences, receptions, and other gatherings with the vibrant energy and artistry of Japanese traditional performances, including Yosakoi, Taiko drumming, Tea Ceremony, Shodo calligraphy, Kyudo archery, and more.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Why Incorporate Japanese Traditional Arts into Your Events:
        </h2>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          1. Foster Unforgettable Bonds:
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Engage your attendees in a unique and memorable experience that goes beyond mere spectatorship. Our interactive workshops encourage participation, promoting camaraderie and a sense of shared purpose among your guests.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          2. Create Lasting Impressions:
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Leave a lasting impression with the vibrant and awe-inspiring performances of Japanese traditional arts. These captivating displays will serve as the highlight of your event, etching cherished memories into the minds of your attendees.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          3. Introduce Japanese Culture:
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Immerse your guests in the rich tapestry of Japanese culture through the captivating lens of traditional arts. Our performances provide an authentic and meaningful introduction to Japan’s heritage, making them ideal for international gatherings.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          4. Experienced Professional Performer Teams:
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Our extensive network of professional performers based in Las Vegas and California brings years of experience and expertise to every event. We carefully curate performances that align perfectly with your unique event requirements.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          5. Comprehensive Support from Planning to Execution:
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          We provide comprehensive support for every aspect of your event, from selecting the perfect performances to handling stage setup, sound and lighting, and overall event coordination. Our goal is to minimize your workload and ensure a seamless and successful event experience.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          6. For Convention Organizers, Booth Exhibitors, and Meeting Planners:
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          If you are a convention organizer, booth exhibitor, or meeting planner seeking to elevate your event with the captivating allure of Japanese traditional arts, we invite you to contact us today.
        </p>
      </div>
      <ContactWithColour />
      <Footer />
    </div>
  );
};

export default Entertainment;