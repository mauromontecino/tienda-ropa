import React, { useEffect, useState } from "react";
import Title from "../Title";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({ saludar }) => {
  const [data, setData] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Productos");

    if (categoryName) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryName)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryName]);

  return (
    <>
      <Title saludo={saludar} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
