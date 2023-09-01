import React from "react";

import Image from "next/image";
import ramp_up_logo from "@/assets/images/ramp-up-logo.png";

const Rampuplogo = () => {
  return (
    // <div
    //   className="website-logo triggerGA w-[1280] h-[145] px-12 py-[73px]"
    //   data-event-action="Website_logo_click"
    //   data-event-category="Home page"
    //   data-event-label="Website Logo">
    //   <Image
    //     src={ramp_up_logo}
    //     alt="ramp-up logo"
    //     loading="lazy"
    //     className="website-logo-img"
    //   />
    // </div>

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
  );
};

export default Rampuplogo;
