import ItemDetail from "../ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    image:
      "https://www.ocu.org/-/media/ocu/images/home/salud/bienestar/toxicos-ropa.png?rev=c2de303f-8383-4503-a9f7-e9ed6c955fa0&hash=2B11DDBB852D0A6A6D3659B38F2EF6B7",
    title: "Jean",
    description: "Jean 1 description",
    price: 200,
    stock: 10,
    category: "ropa",
  },
  {
    id: 2,
    image:
      "https://www.ocu.org/-/media/ocu/images/home/salud/bienestar/toxicos-ropa.png?rev=c2de303f-8383-4503-a9f7-e9ed6c955fa0&hash=2B11DDBB852D0A6A6D3659B38F2EF6B7",
    title: "Jean2",
    description: "Jean 1 description",
    price: 300,
    stock: 20,
    category: "ropa",
  },
  {
    id: 3,
    image:
      "https://www.ocu.org/-/media/ocu/images/home/salud/bienestar/toxicos-ropa.png?rev=c2de303f-8383-4503-a9f7-e9ed6c955fa0&hash=2B11DDBB852D0A6A6D3659B38F2EF6B7",
    title: "Calzado",
    description: "Calzado 1 description",
    price: 400,
    stock: 30,
    category: "calzado",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getData.then((res) =>
      setData(res.find((products) => products.id === parseInt(itemId)))
    );
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
