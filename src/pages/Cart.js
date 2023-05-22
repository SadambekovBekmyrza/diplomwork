import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";
import "./pages.css";

export default function Cart() {
  return (
    <div className="Cart">
      <div className="vayl">
        <h1>Cart</h1>
        <CartList />
        <OrderForm />
      </div>
    </div>
  );
}
