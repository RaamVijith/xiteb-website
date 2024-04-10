import "../assets/styles/components/Header.css";
import { HiArrowRight } from "react-icons/hi2";
import More from "./More";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <nav className="header">
        <div className="nav--logo">
          <Link to="/">
            <a href="#home">
              <img
                alt="logo"
                src="https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/logo_dark.svg"
              />
            </a>
          </Link>
        </div>

        <div className="header--right">
          {/* Open Window */}
          <button onClick={toggleModal}> Request a Quote</button>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <More />
              </div>
            </div>
          )}
          {/* List header */}
          <ul className="nav--list">
            <li>
              <Link to="/projects">
                <a href="#home">Projects</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a href="#welcomePage">Contact</a>
              </Link>
            </li>
            <li>
              <a onClick={toggleModal} href="#service">
                More
              </a>
              <div className="arrow">
                <HiArrowRight />
              </div>
            </li>
          </ul>
          <div className="extra-more">
            <a onClick={toggleModal} href="#service">
              More
            </a>
            <div className="arrow">
              <HiArrowRight />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
