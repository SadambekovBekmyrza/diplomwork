import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "You cart is empty";
  }

  if (!user) {
    return "PLEASE LOGIN TO CREATE AN ORDER !";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      navigate("/thank-you");
      setCart({});
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Phone: <input type="tel" name="phone" required />
      </label>
      <label>
        Address: <input type="text" name="address" required />
      </label>
      <button>Submit</button>
    </form>
  );
}
