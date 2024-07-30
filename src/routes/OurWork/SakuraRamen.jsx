import React from "react";
import ContactWithColour from "../../components/ContactWithColour";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const SakuraRamen = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full">
        {/* Top section with three images */}
        <div className="flex flex-wrap justify-center md:justify-start">
          {/* Hidden on mobile */}
          <img
            src="./sakura1.jpg"
            alt="Placeholder Image 1"
            className="hidden md:block w-1/3 h-auto"
          />
          <img
            src="./sakura2.jpg"
            alt="Placeholder Image 2"
            className="w-full md:w-1/3 h-auto"
          />
          {/* Hidden on mobile */}
          <img
            src="./sakura3.jpg"
            alt="Placeholder Image 3"
            className="hidden md:block w-1/3 h-auto"
          />
        </div>
        <div className="mx-4 md:mx-[150px] mt-12">
          <p className="mb-6 text-base md:text-xl">
            At JPN Entertainment, one of our missions is to support local
            Japanese businesses in Las Vegas, helping them thrive through
            comprehensive services from sales strategy, marketing, social media
            management, competitive analysis, event planning, communication,
            client acquisition, etc. We're proud to share the success story of
            one of our first valued clients, Sakura Ramen, who partnered with us
            shortly after opening their doors last year. We anticipate that our
            ongoing collaboration will drive further business growth, and we are
            excited to showcase some of our key initiatives.
          </p>

          {/* 1st Div */}
          <div className="flex flex-col md:flex-row mb-12 gap-10 items-center">
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D7685] mb-4">
                SNS Total Marketing
              </h2>
              <p className="text-base md:text-xl">
                <strong>Instagram Marketing:</strong> We are working closely
                with their dedicated Instagram marketing designer, enhancing
                Sakura Ramen's online presence and engagement. This initiative
                has included strategic outreach to local influencers to amplify
                their reach. Collaboration is underway to link Instagram with
                their newly created Facebook page for cohesive social media
                management.
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <img
                src="./sakura4.png"
                alt="Placeholder Image 4"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* 2nd Div */}
          <div className="flex flex-col-reverse md:flex-row mb-12 gap-10 items-center">
            <div className="md:w-1/3 w-full">
              <img
                src="./sakura5.png"
                alt="Placeholder Image 5"
                className="w-[100%] h-auto"
              />
            </div>
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D7685] mb-4">
                Event Participation
              </h2>
              <p className="text-base md:text-xl">
                <strong>Event Participation:</strong> We are assisting Sakura
                Ramen in participating in key events such as “Bluefin Tuna
                Cutting Event” collaborating with Omakase Kyara and Tian
                Beverage. We are responsible for gathering customer feedback and
                capturing photos and videos to document the events for media
                contents. We are also facilitating the necessary application and
                insurance processes.
                <br />
                <strong>In-house Events:</strong> Upon successfully obtaining
                the alcohol license and procurement, we're planning an exciting
                event at Sakura Ramen in Winter 2024.
              </p>
            </div>
          </div>

          {/* 3rd Div */}
          <div className="flex flex-col md:flex-row mb-12 gap-10 items-center">
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D7685] mb-4">
                Eye-catching New Menu Items
              </h2>
              <p className="text-base md:text-xl">
                <strong>Instagrammable Desserts:</strong> Considering the introduction of unique,
                Instagrammable desserts like kakigori (Japanese shaved ice),
                leveraging specialized equipment to make them stand out.
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <img
                src="./sakura6.png"
                alt="Placeholder Image 6"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* 4th Div */}
          <div className="flex flex-col-reverse md:flex-row mb-12 gap-10 items-center">
            <div className="md:w-1/3 w-full flex justify-center">
              <img
                src="./sakura7.jpg"
                alt="Placeholder Image 7"
                className="w-[70%] h-auto"
              />
            </div>
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D7685] mb-4">
                Gacha Machine Installation
              </h2>
              <p className="text-base md:text-xl">
                <strong>Novelty Additions:</strong> A gacha machine (Japanese toy vending
                machine) will be installed at Sakura Ramen, adding an element of
                fun and attracting more customers. We are testing this idea,
                inspired by successful implementations at festivals and
                family-oriented target markets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactWithColour />
      <Footer />
    </div>
  );
};

export default SakuraRamen;
