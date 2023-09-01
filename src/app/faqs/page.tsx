"use client";
import { useEffect } from "react";

const page = () => {
  console.log("hello");

  useEffect(() => {
    console.log("Hi inside faq use Effect");
  }, []);
  return (
    <section className="content custom-container mb-12 md:my-28 mt-20 md:mt-40 lg:mr-32">
      <h3 className="font-bold text-5xl mb-12">FAQs</h3>
      <div className="flex justify-between items-start text-2xl">
        <div>
          <div className="mb-12">
            <h3 className="text-3xl my-4">What is Ramp-Up?</h3>
            <p className="mb-4 font-light">
              Ramp-Up is a digital wardrobe management app promoting
              sustainability by helping you connect with the contents of your
              physical wardrobe.
              <br />
              Coming Soon - Luxury Services and Resale
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl my-4">How does Ramp-Up work?</h3>
            <p className="mb-4 font-light">
              Ramp-Up is a wardrobe upload app that allows users to upload and
              organize their luxury wardrobe items online, creating a virtual
              closet. Users can upload their luxury items by taking photos, or
              by uploading them from their photo library. Ramp-Up also offers
              luxury services like wardrobe photoshoot where we will come to
              your home and take high-quality photos of your luxury products.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl my-4">Why should I use Ramp-Up?</h3>
            <p className="mb-4 font-light">
              Using Ramp-Up can help you better organize your valuables, easily
              plan your outfits, and keep track of what you own. It can also
              help you identify gaps in your wardrobe and make more informed
              purchasing decisions. <br />
              We will be offering high-touch luxury services very soon which
              will hep you utilise your wardrobe to its full potential. <br />
              Ramp-Up is your full wardrobe management solution.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl my-4">What technology does Ramp-Up use?</h3>
            <p className="mb-4 font-light">
              Ramp-Up uses state-of-the-art technology throughout all the
              stages. Ramp-Up is using AI, such as machine learning, computer
              vision and recommendation engine to create a seamless and
              enjoyable user experience.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl my-4">How much does it cost?</h3>
            <p className="mb-4 font-light">
              Ramp-Up is free for its users. A premium version with additional
              features will launch in a later version of the app.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl my-4">
              Is it safe to upload photos of my clothing items to a wardrobe
              upload app?
            </h3>
            <p className="mb-4 font-light">
              We take our privacy and security seriously, and use encryption and
              other security measures to protect user data. However, it's
              important to read the app's privacy policy and terms of use before
              uploading any personal information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
