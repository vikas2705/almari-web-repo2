import handbag from "@/assets/images/products/handbag.png";
import hoodie from "@/assets/images/products/hoodie.png";
import jacket from "@/assets/images/products/jacket.png";
import jeans from "@/assets/images/products/jeans.png";
import shoes from "@/assets/images/products/shoes.png";
import sportsShoes from "@/assets/images/products/sportsShoes.png";
import watch from "@/assets/images/products/watch.png";
export const DUMMY_PRODUCT_LIST = [
  {
    name: "Hermes",
    image: [handbag, hoodie, watch],
    id: 1,
    price: 42000,
    originalprice: 60000,
    discount: 20,
    brand: "Brand1",
  },
  {
    name: "Hoodie",
    image: [hoodie, jacket],
    price: 62000,
    originalprice: 74000,
    discount: 15,
    brand: "Brand2",
    id: 2,
  },
  {
    name: "Jacket",
    image: [jacket, jeans],
    price: 92000,
    originalprice: 124000,
    discount: 18,
    brand: "Brand3",
    id: 3,
  },
  {
    name: "Jeans",
    image: [jeans, jacket],
    price: 42000,
    originalprice: 62000,
    discount: 25,
    brand: "Brand4",
    id: 4,
  },
  {
    name: "Shoes",
    image: [shoes, jeans],
    price: 49000,
    originalprice: 62000,
    discount: 10,
    brand: "Brand5",
    id: 5,
  },
  {
    name: "Sports Shoes",
    image: [sportsShoes, jeans],
    price: 39000,
    originalprice: 65000,
    discount: 30,
    Brand: "Brand6",
    id: 6,
  },
  {
    name: "Watch",
    image: [watch, sportsShoes],
    originalprice: 165000,
    discount: 24,
    price: 1234454,
    brand: "Brand7",
    id: 7,
  },
];
