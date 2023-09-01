"use client";
import React from "react";

// import { AiFillAudio } from "react-icons/ai";

import { DUMMY_PRODUCT_LIST } from "@/utils/data";

import Carousel from "@/components/carousel";

import { FacebookShareButton, FacebookIcon } from "next-share";
import { TelegramShareButton, TelegramIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import RelatedProducts from "@/components/related-products";

// import ProductCarousel from "@/components/product-carousel";

const Itemdetails = ({ params }: any) => {
  const id = Number(params.itemdetails[2]);

  const list = DUMMY_PRODUCT_LIST;
  const item = list.find((listItem) => {
    return listItem.id === id;
  });

  if (!item) {
    return (
      <section className=" mb-[320px] mt-20 md:mt-40  md:ml-5 md:px-[56px] max-md:px-10">
        <h4>No item found</h4>
      </section>
    );
  }

  return (
    <section className="max-md:w-full mb-12 md:my-28 mt-20 md:mt-40  md:ml-5 md:px-[56px] max-md:px-10 ">
      <div className="font-bold lg:text-5xl md:text-3xl text-xl md:mb-8 mt-16 pt-7 max max-md:hidden">
        Ramp-Up (Re) Edits
      </div>

      <div className="grid md:grid-cols-2 md:px-10 md:gap-[50px] lg:mt-[80px] md:border-t md:border-slate-600 grid-cols-1 ">
        {/* left */}

        <div className="w-full max-md:w-[130%] p-10 flex-[1.5] max-w-[1000px] md:border-r lg:border-slate-600">
          <Carousel autoSlide imageList={item.image} />
        </div>
        {/* right */}
        <div className="flex-[1] py-3 right-0 pt-[55px]  max-md:flex max-md:flex-col max-md:items-start max-md:pt-2 max-md:pl-3">
          <h5 className="font-bold md:w-[189px] md:h-[32px] md:t-[50px] md:left-[676px] text-2xl">
            {item?.brand}
          </h5>
          <div>{item.name}</div>
          <div className="pt-8 font-bold flex text-[18px]">
            <p className=" mr-2  line-through text-gray-400 ">
              INR {item.originalprice}
            </p>
            INR {item.price}
            <p className="ml-2 text-base font-medium text-green-500">
              {" "}
              ({item.discount}% off)
            </p>
          </div>
          <div className="md:pt-8 pt-8">
            <p className="font-bold">Select Size</p>
            <div className="flex mt-4 ">
              <div className="border rounded-full text-center py-3 mr-6 fondt-medium hover:border-black cursor-pointer w-14">
                S
              </div>
              <div className="border  rounded-full text-center py-3 mr-6 fondt-medium hover:border-black cursor-pointer w-14">
                M
              </div>
              <div className="border rounded-full text-center py-3 fondt-medium hover:border-black cursor-pointer w-14">
                L
              </div>
            </div>
          </div>

          {/* Facebook */}
          <div className="relative flex pl-1 gap-x-5 top-9">
            {/* whatsapp */}

            <WhatsappShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
              separator=":: ">
              <WhatsappIcon size={34} round className="hover:bg-green-400" />
            </WhatsappShareButton>

            {/* telegram */}
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }>
              <TelegramIcon size={34} round className="hover:bg-sky-500" />
            </TelegramShareButton>
          </div>

          <a href="https://wa.me/917291065099" target="_blank ">
            <button className="button-main  mt-20 border  hover:border-black ">
              Shop Now!
            </button>
          </a>
        </div>
      </div>

      <div className="border-t-gray "></div>

      {/* bottom */}

      <div className="max-md:pl-3">
        {/* Description */}
        <div className="mt-16">
          <h5 className="font-bold">Description</h5>
          <ul className="mt-6">
            <li>Hermès Top Handle Bag</li>
            <li>From the 2011 Collection</li>
            <li>Tosca & Rose Tyrien Epsom Leather</li>
            <li>Palladium-Plated Hardware</li>
            <li>Rolled Handles</li>
            <li>Chevre Goatskin & Dual Interior Pockets</li>
            <li>Turn-Lock Closure at Front</li>
            <li>Protective Feet at Base</li>
            <li>Includes Dust Bag, Lock, Keys & Clochette</li>
          </ul>
        </div>
        {/* state */}
        <div className="mt-10">
          <h5 className="font-bold">Status</h5>
          <div className="mt-6">Like new, used once</div>
          <div className="mt-16 font-bold">NON-RETURNABLE, FINAL SALE</div>
        </div>
      </div>

      {/* contact */}

      <div className="border-t border-b border-black sm:h-28 flex flex-col lg:flex-row mt-10 justify-between items-center py-3 px-10">
        <div className="flex max-sm:flex-col items-center sm:gap-2 justify-center">
          <h1 className="text-gray-700 text-md">Whatsapp us at </h1>
          <h1 className="font-semibold">+91-9811111111</h1>
          <h1 className="text-gray-700 text-md"> to buy.</h1>
        </div>
        <a href="https://wa.me/917291065099" target="_blank">
          <button className="button-main hover:bg-slate-800 ">
            Contact Now
          </button>
        </a>
      </div>

      <RelatedProducts/>
    </section>
  );
};

export default Itemdetails;
