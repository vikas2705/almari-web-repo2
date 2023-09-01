import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ---------------------------------------------------------------
import handbag from "@/assets/images/products/handbag.png";
import hoodie from "@/assets/images/products/hoodie.png";
import jacket from "@/assets/images/products/jacket.png";
import jeans from "@/assets/images/products/jeans.png";
import shoes from "@/assets/images/products/shoes.png";
import sportsShoes from "@/assets/images/products/sportsShoes.png";
import watch from "@/assets/images/products/watch.png";
import ProductCard from './product-card';
// ---------------------------------------------------------------

const RelatedProducts= () => {

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1023, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },
    };
  return (
    <div className="mt-[50px] md:mt-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">Similar Items</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]">
        <ProductCard name={"item1"} image={handbag} id={1} brand={"brand1"} />
        <ProductCard name={"item2"} image={hoodie} id={2} brand={"brand2"} />
        <ProductCard name={"item3"} image={jacket} id={3} brand={"brand3"} />
        <ProductCard name={"item4"} image={jeans} id={4} brand={"brand4"} />
        <ProductCard name={"item5"} image={shoes} id={5} brand={"brand5"} />
       
      </Carousel>
    </div>
  );
}

export default RelatedProducts;