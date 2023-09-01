"use client";

import about_us_img from "@/assets/images/about-us-img.png";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [showResponse, setShowResponse] = useState(true);
  const ref = useRef(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        ref={ref}
        id="early-register"
        className="content w-full custom-container my-10 md:my-20 flex flex-row ">
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            setShowResponse(false);
          }}>
          <div className="flex flex-col justify-center lg:flex-row lg:gap-4 lg:justify-between item-center mt-16">
            <h3 className="font-bold text-3xl lg:text-5xl mb-4 lg:mb-0">
              Register to get <br className="hidden lg:inline" />
              early access
            </h3>

            <div className="w-full lg:w-auto">
              <label>
                Email
                <br />
                <input
                  type="email"
                  id="user-email"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value), setShowResponse(true);
                  }}
                  required
                  className="border-none border-bottom mb-4 border-bottom-solid w-full lg:min-w-[130px]"
                />
                <br />
                <span
                  hidden={showResponse}
                  id="registartion-response"
                  className="text-xs tracking-widest">
                  Registration Done
                </span>
              </label>
            </div>
            <input
              type="submit"
              className="button-main px-24 cursor-pointer bg-black lg:h-fit  w-fit"
            />
          </div>
        </form>
      </section>
      {/* Register for early access ends */}
      {/* About us starts */}

      <section className="content custom-container my-10 md:my-20 w-full ">
        <h3 className="font-bold text-3xl lg:text-5xl mb-8">About us</h3>
        <div className="flex flex-row lg:flex-initial justify-center lg:justify-between items-center lg:items-start text-2xl about-us max-lg:flex-wrap">
          <div>
            <p className="mb-8 lg:mr-32">
              Welcome to our digital luxury wardrobe app, where we believe that
              style and sustainability go hand in hand. Our story begins with a
              memory of our mothers and grandmothers, who taught us the value of
              reusing and repurposing everything we owned.
            </p>

            <p className="mb-8 lg:mr-32">
              Growing up, we watched in awe as they transformed old clothes into
              something new and beautiful. They were our original stylists, and
              we learned the art of dressing from them. But we also learned
              something else - the importance of sustainability and caring for
              the environment.
            </p>

            <p className="mb-8 lg:mr-32">
              Today, we're carrying on this tradition of reuse by creating a
              luxury wardrobe app that allows people to experience the joy of
              high-end fashion, with thoughtful consideration to the harmful
              effects on the environment. We believe that every piece of
              clothing has a story to tell, and by reviving and reusing what you
              have, and with the art and knowledge of conscious buying, you can
              extend the life of these items and reduce waste.
            </p>

            <p className="mb-8 lg:mr-32">
              By choosing our luxury wardrobe app, you're making a statement
              about your commitment to the environment and to a more sustainable
              future for fashion.
            </p>

            <p className="mb-8 lg:mr-32">
              Thank you for joining us on this journey. We're honoured to be a
              part of your story, and we look forward to sharing many more
              memories with you.
            </p>
          </div>

          <Image
            className="w-11/12 h-auto max-lg:h-[500px] max-lg:w-[320px]"
            src={about_us_img}
            alt="About Ramp-up"
            loading="lazy"
          />
        </div>
      </section>
      {/* About us ends */}
      {/* Team section start */}
      <section className="content w-full custom-container mt-10 mb-12 md:my-20">
        <h3 className="font-bold text-3xl lg:text-5xl mb-8">The Team</h3>

        <div className="flex  flex-col justify-between items-center md:flex md:flex-col lg:flex-row">
          <div className="text-center mb-4 lg:mb-auto">
            <div id="shruti" className="team-img"></div>
            <a
              href="https://www.linkedin.com/in/shruti-garg-822aa73/"
              className="underline block text-2xl mt-8 mb-4 triggerGA"
              target="_blank"
              data-event-action="Team_Shruti_click"
              data-event-category="Home page"
              data-event-label="Team Shruti">
              Co-Founder
            </a>
          </div>

          <div className="text-center mb-4 lg:mb-auto">
            <div id="vima" className="team-img text-center"></div>
            <a
              href="https://www.linkedin.com/in/vima-philips/"
              className="underline block text-2xl text-center mt-8 mb-4 triggerGA"
              target="_blank"
              data-event-action="Team_Vima_click"
              data-event-category="Home page"
              data-event-label="Team Vima">
              Co-Founder
            </a>
          </div>

          <div className="text-center mb-4 lg:mb-auto">
            <div id="rahul" className="team-img text-center"></div>
            <a
              href="https://www.linkedin.com/in/rahulganjoo/"
              className="underline block text-2xl text-center mt-8 mb-4 triggerGA"
              target="_blank"
              data-event-action="Team_Rahul_click"
              data-event-category="Home page"
              data-event-label="Team Rahul">
              Advisor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
