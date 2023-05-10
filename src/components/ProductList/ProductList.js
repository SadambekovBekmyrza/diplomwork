import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./ProductList.css";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);
  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="product">
        <img src={product.picture} alt={product.name} />
        <div className="product-content">
          <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
          <span>{product.price} som</span>
        </div>
        <AddToCart product={product} />
        <DeleteProduct product={product} />
      </div>
    ));
  return (
    <div className="ProductList">
      {output} <AddProduct category={category} />
    </div>
  );
}
