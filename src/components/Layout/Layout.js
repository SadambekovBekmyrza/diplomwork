import CategoryList from "../CategoryList/CategoryList.js";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
        <Logo></Logo>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
