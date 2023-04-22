import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id} className="nav-links">
      <div>
        <img
          src={category.icon}
          alt={category.name}
          className="category-icon"
        />
        <NavLink to={`/categories/${category.slug}`}>{category.name}</NavLink>
      </div>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>CATEGORIES</h3>
      <ul className="nav">{output}</ul>
    </div>
  );
}
