import axios from "axios";

export const fetchProduct = async () => {
  const { data } = await axios.get(
    "https://2696e52c-ce6f-43cc-bbbe-46850ab2d273.mock.pstmn.io//api",
  );

  return data;
};

export default fetchProduct;
