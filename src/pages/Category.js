import { useMatch } from "react-router";
import NotFound from "./NotFound";
import "./pages.css";
import ProductList from "../components/ProductList/ProductList";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const { categories } = useContext(AppContext);

  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <div className="vayl">
        <h1>{category.name}</h1>
        <ProductList category={category} />
      </div>
    </div>
  );
}
