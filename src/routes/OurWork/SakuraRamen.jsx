import React from 'react';
import ContactWithColour from '../../components/ContactWithColour';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const SakuraRamen = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full">
        {/* Top section with three images */}
        <div className="flex">
          <img src="./sakura1.jpg" alt="Placeholder Image 1" className="w-1/3 h-auto" />
          <img src="./sakura2.jpg" alt="Placeholder Image 2" className="w-1/3 h-auto" />
          <img src="./sakura3.jpg" alt="Placeholder Image 3" className="w-1/3 h-auto" />
        </div>
        <div className="mx-[150px] mt-12">
          <p className="mb-6 text-xl">
            At JPN Entertainment, one of our mission is to support local Japanese businesses in Las Vegas, helping them thrive through comprehensive services from sales strategy, marketing, social media management, competitive analysis, event planning, communication, client acquisition, etc. We're proud to share the success story of one of our first valued clients, Sakura Ramen, who partnered with us shortly after opening their doors last year. We anticipate that our ongoing collaboration will drive further business growth, and we are excited to showcase some of our key initiatives.
          </p>

          {/* 1st Div */}
          <div className="flex mb-12 gap-10 items-center">
            <div className="w-2/3">
              <h2 className="text-3xl font-semibold text-[#0D7685] mb-4">SNS Total Marketing</h2>
              <p className="text-xl mb-6">
                <strong>Instagram Marketing:</strong> We will be working closely with their dedicated Instagram marketing designer, enhancing Sakura Ramen's online presence and engagement. This initiative has included strategic outreach to local influencers to amplify their reach.
                <br />
                <strong>Facebook Coordination:</strong> Collaboration is underway to link Instagram with their newly created Facebook page for cohesive social media management.
              </p>
            </div>
            <div className="w-1/3">
              <img src="https://via.placeholder.com/400" alt="Placeholder Image 4" />
            </div>
          </div>

          {/* 2nd Div */}
          <div className="flex mb-12 gap-10 items-center">
            <div className="w-1/3">
              <img src="https://via.placeholder.com/400" alt="Placeholder Image 5" />
            </div>
            <div className="w-2/3">
              <h2 className="text-3xl font-semibold text-[#0D7685] mb-4">Event Participation</h2>
              <p className="text-xl mb-6">
                <strong>Event Participation:</strong> We will be assisting Sakura Ramen in participating in key events such as “Bluefin Tuna Cutting Event” collaborating with Omakase Kyara and Tian Beverage. We will be responsible for gathering customer feedback and capturing photos and videos to document the events for media contents. We are also facilitating the necessary application and insurance processes.
                <br />
                <strong>In-house Events:</strong> Upon successfully obtaining the alcohol license and procurement, we're planning an exciting event at Sakura Ramen in Winter 2024.
              </p>
            </div>
          </div>

          {/* 3rd Div */}
          <div className="flex mb-12 gap-10 items-center">
            <div className="w-2/3">
              <h2 className="text-3xl font-semibold text-[#0D7685] mb-4">Eye-catching New Menu Items</h2>
              <p className="text-xl mb-6">
                Instagrammable Desserts: Considering the introduction of unique, Instagrammable desserts like kakigori (Japanese shaved ice), leveraging specialized equipment to make them stand out.
              </p>
            </div>
            <div className="w-1/3">
              <img src="https://via.placeholder.com/400" alt="Placeholder Image 6" />
            </div>
          </div>

          {/* 4th Div */}
          <div className="flex mb-12 gap-10 items-center">
            <div className="w-1/3">
              <img src="https://via.placeholder.com/400" alt="Placeholder Image 7" />
            </div>
            <div className="w-2/3">
              <h2 className="text-3xl font-semibold text-[#0D7685] mb-4">Gacha Machine Installation</h2>
              <p className="text-xl mb-6">
                Novelty Additions: A gacha machine (Japanese toy vending machine) will be installed at Sakura Ramen, adding an element of fun and attracting more customers. We are testing this idea, inspired by successful implementations at festivals and family-oriented target markets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactWithColour/>
      <Footer />
    </div>
  );
};

export default SakuraRamen;
