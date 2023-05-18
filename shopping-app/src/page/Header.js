import "./Header.css";
import logo from "../img/logo.png";
import navMenu from "../img/menu-icon.png";
import React, { useState, useRef, useEffect } from "react";
import { MdStarOutline, MdOutlineCardGiftcard } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (isOpen && !outsideRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [isOpen]);

  const clickMenuIcon = () => {
    setIsOpen(true);
  };

  return (
    <header className="header">
      <div className="header-column">
        <Link className="header-mainTitle" to="/">
          <img className="header-logoImg" src={logo} />
          <div className="header-title">COZ Shopping</div>
        </Link>
      </div>

      <div className="header-column">
        <img
          onClick={clickMenuIcon}
          className="header-menuIcon"
          src={navMenu}
        />

        {isOpen && (
          <section className="dropDown" ref={outsideRef}>
            <div className="dropDown-list">ooo님, 안녕하세요!</div>
            <Link className="dropDown-list" to="/productlist">
              <MdOutlineCardGiftcard className="dropDown-Icon" />
              <span>상품리스트 페이지</span>
            </Link>
            <Link className="dropDown-list" to="/bookmark">
              <MdStarOutline className="dropDownIcon" />
              <span>북마크 페이지</span>
            </Link>
          </section>
        )}
      </div>
    </header>
  );
};
export default Header;
