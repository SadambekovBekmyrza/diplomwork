import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Devilery from "./pages/Delivery";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Devilery />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
