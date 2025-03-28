import { collection, addDoc } from "firebase/firestore";
import { ContactForm } from "./data-contracts";
import { db } from "./firebase";
import { checkRateLimit } from "../security";

export const createMessage = async (form: ContactForm) => {
  if (!checkRateLimit()) throw new Error("Too many requests");
  try {
    const docRef = await addDoc(collection(db, "messages"), form);
    console.log("Message written with id: ", docRef.id);
  } catch (error) {
    console.error("Error adding message: ", error);
    throw error;
  }
};
