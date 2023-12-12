import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTocart } from "../Cart/CartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);

  //   fetching data
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((val) => {
        setProducts(val.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="grid items-baseline grid-cols-3 p-4 gap-4">
        {products.map((val, i) => {
          return <Card key={i} products={val} />;
        })}
      </div>
    </>
  );
};

const Card = ({ products }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const { id } = products;
    dispatch(addTocart({ id,products }));
  };

  return (
    <div className="flex flex-col overflow-hidden m-2">
      <img
        className="w-[50%] mx-auto"
        src={products.image}
        alt={products.title}
      />
      <p className="font-semibold line-clamp-1">{products.title}</p>
      <p className="font-bold text-center text-[25px]">${products.price}</p>
      <p className="line-clamp-3 text-justify text-[16px] opacity-60">
        {products.description}
      </p>
      <button className="bg-[#ef4444]" type="button" onClick={handleClick}>
        Shop Now
      </button>
    </div>
  );
};

export default Product;
