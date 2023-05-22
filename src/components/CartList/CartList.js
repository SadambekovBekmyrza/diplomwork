import { useContext } from "react";
import "./CartList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }
  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <NavLink to={"/products/" + product.slug}>
          <div className="name">{product.name}</div>
        </NavLink>
        <img src={product.picture} alt={product.name} />
        <div className="cart-btn">
          <span>{cart[product.id] * product.price} som</span>
          <input
            type="number"
            value={cart[product.id]}
            min={1}
            onChange={(event) => onQuantityChange(product, +event.target.value)}
          />
          <div onClick={() => onItemRemove(product)}>
            <svg
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="30"
            >
              <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" />
            </svg>
          </div>
        </div>
      </div>
    ));
  return <div className="CartList">{output}</div>;
}
