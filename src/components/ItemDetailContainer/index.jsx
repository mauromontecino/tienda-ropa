import ItemDetail from "../ItemDetail";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "Productos", itemId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
