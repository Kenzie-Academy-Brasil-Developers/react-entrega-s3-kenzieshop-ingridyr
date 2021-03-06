//aqui vem a logo, a barra de pesquisa, o botão do carrinho e o botão de login
import { useState } from "react";
import { useHistory } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";

import Cart from "../Cart";
import "./style.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const history = useHistory();

  return (
    <header>
      <nav>
        <div className="logo">
          <h3>
            <FaPaw color="white" title="cart button" /> KenzieShop
          </h3>
        </div>

        <div className="cartButton">
          {toggle ? (
            <div className="cartBox">
              <button className="showCart" onClick={() => setToggle(false)}>
                Cart
              </button>
              <Cart />
            </div>
          ) : (
            <div>
              <IoCartOutline
                onClick={() => setToggle(true)}
                size={30}
                color="white"
              />
            </div>
          )}
          <button
            className="buttonLogin"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
