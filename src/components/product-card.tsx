"use client";

import Image from "next/image";
import Link from "next/link";



const ProductCard = ({ name, image, id, brand }: any) => {
  return (
    <Link
      href={`/product/${brand}/${name}/${id}`}
      className="p-10 w-auto sm:h-[450px] h-80 border rounded flex flex-col items-center justify-center ">
      <Image
        src={image}
        alt="Product Image"
        loading="lazy"
        className="lg:w-11/12 md:w-5/6 sm:w-1/2 w-2/3"
      />
      <div className="flex w-5/6 pt-5 flex-col items-center justify-center">
        <div className="font-bold">{name}</div>

        <div>{brand}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
