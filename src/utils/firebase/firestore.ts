import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from ".";

// Initialize Firestore
const db = getFirestore(firebaseApp);

export const getCollectionData = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error("Error trying to get data :", error);
    throw error;
  }
};

export const addDocument = async (collectionName: string, documentId: string, data: any) => {
  try {
    await setDoc(doc(db, collectionName, documentId), data);
  } catch (error) {
    console.error("Error adding to document :", error);
    throw error;
  }
};
