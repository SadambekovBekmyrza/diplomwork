import { useContext } from "react";
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import Logo from "../../assets/delete-icon.jpg";

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
          <Link to={"/product/" + product.slug}>{product.name}</Link>
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
          <img onClick={() => onItemRemove(product)} src={Logo} alt="delete" />
        </div>
      </div>
    ));
  return <div className="CartList">{output}</div>;
}
