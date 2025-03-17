import { firebaseApp } from "@/utils/firebase/index";
import { getFirestore } from "firebase/firestore";

// Initialize Firestore using the Firebase app from the extension
export const db = getFirestore(firebaseApp);
