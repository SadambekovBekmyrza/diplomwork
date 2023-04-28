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
        <div className="name">
          <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
        </div>
        <img src={product.picture} alt={product.name} />
        <div>
          <span>{cart[product.id] * product.price} som</span>
          <input
            type="number"
            value={cart[product.id]}
            min={1}
            onChange={(event) => onQuantityChange(product, +event.target.value)}
          />
          <img
            onClick={() => onItemRemove(product)}
            src="https://blabla"
            alt="delete"
          />
        </div>
      </div>
    ));
  return <div className="CartList">{output}</div>;
}
