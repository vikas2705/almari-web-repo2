"use client";
import React from "react";
import Image from "next/image";
import ramp_up_logo from "@/assets/images/ramp-up-logo.png";

const Header = () => {
  return (
    <header className="header-main w-full">
      <div className="header-container">
        <video width="100%" autoPlay muted loop className="visible_on_dekstop">
          <source src="/video/Desktop_11.mp4" type="video/mp4" />
        </video>
        <video width="100%" autoPlay muted loop className="visible_on_tablets">
          <source src="/video/Tab.mp4" type="video/mp4" />
        </video>
        <video width="100%" autoPlay muted loop className="visible_on_mobile">
          <source src="/video/Mobile-New.mp4" type="video/mp4" />
        </video>

        {/* rampup logo */}
        <a href="/">
          <div
            className="website-logo triggerGA"
            data-event-action="Website_logo_click"
            data-event-category="Home page"
            data-event-label="Website Logo">
            <Image
              src={ramp_up_logo}
              alt="ramp-up logo"
              loading="lazy"
              className="website-logo-img"
            />
          </div>
        </a>
        <div
          className="button-container triggerGA"
          data-event-action="Early_access_header_click"
          data-event-category="Home page"
          data-event-label="Early Access Header">
          <button className="button-main ">Early Access</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
