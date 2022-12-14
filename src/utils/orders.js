import {addDoc, collection, getFirestore} from "firebase/firestore";

export const createOrder = (newOrder) => {
    const databse = getFirestore();
    const collectionReference = collection(databse, "orders");

    return addDoc(collectionReference, newOrder)
        .then((snapshot) => snapshot.id)
        .catch(error => console.warn(error));
};