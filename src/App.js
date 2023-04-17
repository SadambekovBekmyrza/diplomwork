import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Devilery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import AboutUs from "./pages/AboutUs";
import Address from "./pages/Address";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import { categoryCollection, productsCollection } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export const AppContext = createContext({
  categories: [],
  products: [],
  // context corzina
  cart: {}, // soderjimoe corzinci
  setCart: () => {}, // izmenit soderjimoe corzinki
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getDocs(categoryCollection).then(({ docs }) => {
      setCategories(
        docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    getDocs(productsCollection).then(({ docs }) => {
      setProducts(
        docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Devilery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/address" element={<Address />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
