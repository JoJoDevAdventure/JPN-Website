import React from "react";
import ContactWithColour from "../../components/ContactWithColour";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const OtherServices = () => {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div className="mx-4 md:mx-[150px] mt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0D7685] mb-8 md:mb-12 text-center">
          Other Services
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Bringing Authentic Japanese Flavors to Vibrant Festivals
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          JPN Entertainment is proud to bring the authentic flavors of Japanese cuisine to a diverse audience at various festivals across Las Vegas, including Japanese, Asian, and general-interest food festivals. We cater to both locals and visitors, offering an unforgettable culinary experience for families and friends.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Our Culinary Delights
        </h2>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Sweet Treats
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Indulge in refreshing shaved ice, delectable taiyaki (fish-shaped cakes), fluffy imagawayaki (pancakes), and matcha ice cream.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Savory Snacks
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Enjoy the tantalizing flavors of takoyaki (octopus balls), onigiri (rice balls), and yakisoba (stir-fried noodles).
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Sake
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Discover the exquisite world of Japanese sake, complementing your meal with a range of premium options.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Authentic Flavors, Casual Atmosphere
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Collaborating with experienced chefs and sake distributors who have a long-standing presence in the US, we carefully curate our menu to reflect the market preferences of Las Vegas while upholding the essence of Japanese cuisine. Our aim is to provide a wide variety of dishes that cater to diverse tastes and ensure a delightful culinary experience amidst the vibrant atmosphere of festivals.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Join Us at Your Next Festival
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Whether you're organizing a festival, seeking catering services, or simply craving authentic Japanese cuisine, we invite you to connect with us.
        </p>
      </div>
      <ContactWithColour />
      <Footer />
    </div>
  );
};

export default OtherServices;