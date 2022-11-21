import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Components/footer/footer.component";
import Popup from "../../Components/Popup/Popup.component";
import "./nav.styles.scss";

export default function Nav() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/createrecipe"}>Create</NavLink>
        <NavLink to={"/recipes"}>Recipes</NavLink>
      </nav>
      <Outlet />
      <Popup />
      <Footer portfolio={'https://imadfxq.com/'} />
    </>
  );
}
