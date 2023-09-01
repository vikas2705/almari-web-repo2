"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/product-card";
import { getProductsList } from "@/apis/getProductList";
import { DUMMY_PRODUCT_LIST } from "@/utils/data";

// import useSWR from "swr";
// import { log } from "console";

const ProductList = () => {
  const [productList, setProductList] = useState<any>(DUMMY_PRODUCT_LIST);
  // const [isLoading, setLoading] = useState(false);

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const res = useSWR("https://www.omdbapi.com/?s=ave&apikey=b8e495b3", fetcher);

  // console.log("res", res);
  // console.log("data", res.data);

  // console.log("error", res.error);
  // console.log("Response", data.Response);
  // useEffect(() => {
  //   console.log("vikas useEffect loaded");
  //   try {
  //     getProductsList()
  //       .then((res) => {
  //         console.log("ressss", res);
  //         setProductList(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }, [productList]);

  // if (isLoading) return <p>Loading Products...</p>;

  // useEffect(async () => {
  //   let data = await fetch("https://www.omdbapi.com/?s=ave&apikey=b8e495b3");
  //   data = await data.json()
  //   console.log(data);

  // },[]);

  useEffect(() => {
    (async () => {
      let data = await fetch("https://www.omdbapi.com/?s=ave&apikey=b8e495b3");
      data = await data.json();
      console.log("data: ", data);
      console.log("inside useEffect ");
    })();
  }, []);

  // (async () => {
  //   let data = await fetch("https://www.omdbapi.com/?s=ave&apikey=b8e495b3");
  //   data = await data.json();
  //   console.log("data: ", data);
  //   console.log("inside  iife");
  // })();

  return (
    <section className="content custom-container mb-12 md:my-28 mt-20 md:mt-40  ">
      <h3 className="font-bold max-md:pt-10 lg:text-5xl md:text-3xl text-xl mb-8 mt-[60px]">
        Ramp-Up (Re) Edit
      </h3>

      <div className="grid gap-10 border-gray-200 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {productList.map((item: any, index: number) => {
          return (
            <div key={index}>
              <ProductCard
                name={item.name}
                image={item.image[0]}
                id={item.id}
                brand={item.brand}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
