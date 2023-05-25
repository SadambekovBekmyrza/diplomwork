import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";
import CanvasParticleAnimation from "../CanvasParticleAnimation";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "You cart is empty";
  }

  if (!user) {
    return (
      <div className="request">
        <h1>PLEASE LOGIN TO CREATE AN ORDER !</h1>
      </div>
    );
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
  //

  return (
    <div className="fon">
      <div className="canvas">
        <CanvasParticleAnimation />
      </div>
      <form className="OrderForm" onSubmit={onFormSubmit}>
        <h5>Create an order</h5>
        <label>
          <span>Name:</span> <input type="text" name="name" required />
        </label>
        <label>
          <span>Phone:</span> <input type="tel" name="phone" required />
        </label>
        <label>
          <span>Address:</span> <input type="text" name="address" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
