import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [showProduct, setShowProduct] = useState(false);
    const toggleShowProduct = () => setShowProduct(!showProduct);
    const hideProducts = () => setShowProduct(false)

    return (
      <>
        <nav>
          <div className=" container nav-items">
            <div className=" nav-section">
              <Link to="/birdnet-clone" className="logo">
                <img src="./images/logo-dark.svg" />
              </Link>
              <div>
                <ul className={click ? "links active" : "links"}>
                  <li className="product">
                    <Link to="/birdnet-clone">
                      Products
                      <i
                        className="fa fa-caret-down prod-menu"
                        aria-hidden="true"
                        onClick={toggleShowProduct}
                      ></i>
                    </Link>
                  </li>

                  <div
                    className={
                      showProduct ? "product-menu active" : "product-menu"
                    }
                  >
                    <li>
                      <a href="#banking" onClick={hideProducts}>
                        Us Banking
                      </a>
                    </li>
                    <li>
                      <a href="#border" onClick={hideProducts}>
                        Cross border and Local Transfer
                      </a>
                    </li>
                    <li>
                      <a href="#account" onClick={hideProducts}>
                        Account Consolidation
                      </a>
                    </li>
                  </div>

                  <li>
                    <Link to="/blog" onClick={closeMobileMenu}>
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" onClick={closeMobileMenu}>
                      Contact Us
                    </Link>
                  </li>

                  <div className="drop-nav-btn">
                    <button>Get started today</button>
                  </div>
                </ul>
              </div>
            </div>

            <div className="nav_btn">
              <button>Get started today</button>
            </div>

            <button onClick={handleClick} className="drop-btn">
              <i className={click ? "uil uil-multiply" : " fa fa-bars"}></i>
            </button>
          </div>
        </nav>
      </>
    );
}
export default NavBar;