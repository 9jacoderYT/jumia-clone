import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const uploadOrder = async (
  phoneNumber,
  deliveryAddress,
  name,
  cartSum,
  deliverySum,
  cart
) => {
  const orderCollectionRef = collection(db, "orders");
  try {
    await addDoc(orderCollectionRef, {
      phoneNumber,
      deliveryAddress,
      name,
      cartSum,
      deliverySum,
      cart
    });
  } catch (error) {
    return false;
  }

  return true;
};
