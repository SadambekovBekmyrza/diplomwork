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
        <NavLink to={"/products/" + product.slug}>
          <div className="productname">{product.name}</div>
        </NavLink>

        <div className="product-img">
          <div className="zavesa"></div>
          <img src={product.picture} alt={product.name} />
        </div>

        <div className="product-content">
          <span>{product.price} som</span>
          <AddToCart product={product} />
          <DeleteProduct product={product} />
        </div>
      </div>
    ));
  return (
    <div className="ProductList">
      {output} <AddProduct category={category} />
    </div>
  );
}
