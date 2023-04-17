import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./ProductList.css";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);
  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="ProductList">
        <img src={product.picture} alt={product.name} />
        <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
        <span>{product.price} som</span>
        <AddToCart product={product} />
      </div>
    ));
  return <div className="ProductList">{output}</div>;
}