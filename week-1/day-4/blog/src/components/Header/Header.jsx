import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import menuIcon from "../../assets/menu.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const openMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation  navItems={navItems}  showMobileNav={isMobileMenuOpen}  closeMenu={closeMenu} />
        <button className={styles.menuBtn} onClick={openMenu}>
          <img className={styles.menuIcon} src={menuIcon} alt="Menu" />
        </button>
    </header>
  );
};

export default Header;
