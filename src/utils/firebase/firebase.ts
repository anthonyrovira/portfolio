import { firebaseApp } from "@/utils/firebase/index";
import { getFirestore } from "firebase/firestore";

// Initialize Firestore using the Firebase app from the extension
const db = getFirestore(firebaseApp);

export { db };
