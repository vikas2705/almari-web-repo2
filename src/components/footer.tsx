import ScrollUp from "@/assets/icons/ScrollUp";
import React from "react";

const Footer = () => {
  return (
    <section className="content custom-container mb-5 w-full relative ">
      <div className="border-t-gray grid max-sm:grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="footer-left pt-10">
          <div className="info-links h-[150px]">
            <p className="text-base">
              Please contact us for more info <br />
              on partnership opportunities
            </p>
            <p className="text-xl">
              <a
                className="triggerGA"
                href="mailto:social@ramp-up.in"
                target="_blank"
                data-event-action="Mail_to_social_footer_click"
                data-event-category="Home page"
                data-event-label="Mail To Social Footer">
                social@ramp-up.in
              </a>
            </p>
            <p className="text-base mt-4">For press inquires</p>
            <p className="text-xl">
              <a
                className="triggerGA"
                href="mailto:social@ramp-up.in"
                target="_blank"
                data-event-action="Mail_to_press_footer_click"
                data-event-category="Home page"
                data-event-label="Mail To Press Footer">
                social@ramp-up.in
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center">
              <a
                className="text-gray-tone6 text-sm triggerGA"
                href="privacy-policy"
                data-event-action="Privacy_policy_footer_click"
                data-event-category="Home page"
                data-event-label="Privacy Policy Footer">
                Privacy Policy
              </a>
              <a
                className="text-gray-tone6 text-sm ml-4 lg:ml-12 triggerGA"
                href="terms"
                data-event-action="Terms_footer_click"
                data-event-category="Home page"
                data-event-label="Terms Footer">
                Terms of Service
              </a>
              <a
                className="text-gray-tone6 text-sm ml-4 lg:ml-12 triggerGA"
                href="faqs"
                data-event-action="Faqs_footer_click"
                data-event-category="Home page"
                data-event-label="FAQs Footer">
                FAQs
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right pt-10 md:pl-6">
          <div className="info-links h-[150px]">
            <p>
              <a
                className="text-xl triggerGA"
                href="https://www.instagram.com/rampup.in/"
                target="_blank"
                data-event-action="Instagram_footer_click"
                data-event-category="Home page"
                data-event-label="Instagram Footer">
                INSTAGRAM
              </a>
            </p>
            <p>
              <a
                className="text-xl triggerGA"
                href="https://twitter.com/rampupapp?s=11&t=ZqcK6UPk3xOezGJKjy1URA"
                target="_blank"
                data-event-action="Twitter_footer_click"
                data-event-category="Home page"
                data-event-label="Twitter Footer">
                TWITTER
              </a>
            </p>
            <p>
              <a
                className="text-xl triggerGA"
                href="https://www.linkedin.com/company/rampupapp/"
                target="_blank"
                data-event-action="Linkedin_footer_click"
                data-event-category="Home page"
                data-event-label="Linkedin Footer">
                LINKEDIN
              </a>
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-end">
              <span className="text-gray-tone6 text-sm">
                © 2023 RAMPUP Powered by 2nd Innings Technology Pvt. Ltd.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[60px] bottom-[60px]">
        <a
          id="top-arrow"
          className="triggerGA"
          href="#"
          data-event-action="TopArrow_footer_click"
          data-event-category="Home page"
          data-event-label="Top Arrow Footer">
          <ScrollUp />
        </a>
      </div>
    </section>
  );
};

export default Footer;
