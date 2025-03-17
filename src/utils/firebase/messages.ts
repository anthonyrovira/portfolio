import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ContactForm } from "./data-contracts";
import { db } from "./firebase";

export const createMessage = async (form: ContactForm) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      ...form,
      createdAt: serverTimestamp(),
    });
    console.log("Message written with id: ", docRef.id);
  } catch (error) {
    console.error("Error adding message: ", error);
    throw error;
  }
};
