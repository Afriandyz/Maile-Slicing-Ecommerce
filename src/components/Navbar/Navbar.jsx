import logo from "../../assets/Logo/logo.png";
import cart from "../../assets/cart/cart.png";
import hamburgerMenu from "../../assets/hamburger-menu/hamburger_menu.png";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center p-3">
      <div className="image">
        <a href="#">
          <img src={logo} alt="maile-logo" />
        </a>
      </div>
      <div className="cart-hamburger flex gap-3">
        <img src={cart} alt="" />
        <img src={hamburgerMenu} alt="" />
      </div>
    </section>
  );
};

export default Navbar;
