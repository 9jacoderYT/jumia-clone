import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const productsRef = collection(db, "products");

export const fetchProducts = async () => {
  const q = query(productsRef);
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchProductsbyCategory = async (category) => {
  const q = query(productsRef, where("categories", "==", category));
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchProductsByBrand = async (brand) => {
  const q = query(productsRef, where("brand", "==", brand));

  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchProductById = async (id) => {
  const products = await fetchProducts();

  const results = products.filter((product) => {
    return product.id == id;
  });

  return results[0];
};
