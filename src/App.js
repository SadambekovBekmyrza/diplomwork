import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import { createContext, useEffect, useState } from "react";
import {
  onAuthChange,
  onCategoriesLoad,
  onOredrsLoad,
  onProductsLoad,
} from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";
import CategoryListLink from "./pages/CategoryListLink";
import DeliveryPayment from "./pages/DeliveryPayment";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // context corzina
  cart: {}, // soderjimoe corzinci
  setCart: () => {}, // izmenit soderjimoe corzinki

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    // getDocs(categoryCollection).then(({ docs }) => {
    //   setCategories(
    //     docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }))
    //   );
    // });
    onProductsLoad(setProducts);
    // getDocs(productsCollection).then(({ docs }) => {
    //   setProducts(
    //     docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }))
    //   );
    // });
    onOredrsLoad(setOrders);
    // getDocs(ordersCollection).then(({ docs }) => {
    //   setOrders(
    //     docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }))
    //   );
    // });

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "bekavlad2005@gmail.com";
      }
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery-payment" element={<DeliveryPayment />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/category-list" element={<CategoryListLink />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
