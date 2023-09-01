import { DUMMY_PRODUCT_LIST } from "@/utils/data";

export const getProductDetail = (id: number) => {
  //TODO: Replace this with API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = DUMMY_PRODUCT_LIST;
      const item = list.find((listItem) => {
        return listItem.id === id;
      });

      resolve(item || null);
    }, 2000);
  });
};
