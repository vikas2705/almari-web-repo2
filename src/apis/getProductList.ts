import { DUMMY_PRODUCT_LIST } from "@/utils/data";

export const getProductsList = () => {
  console.log("alerttt getproductlist called");
  //TODO: Replace this with API call

  return DUMMY_PRODUCT_LIST;

  /*return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DUMMY_PRODUCT_LIST);
    }, 2000);
  });*/
};
