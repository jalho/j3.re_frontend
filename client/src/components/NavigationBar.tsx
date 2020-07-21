import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// React Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    localStorage.setItem("lng", lng);
    i18n.changeLanguage(lng);
  };

  return (
     <Navbar variant="dark" sticky="bottom">

       <Navbar.Brand as={Link} to="/">j3.re</Navbar.Brand>
   
       <Nav>

        <Nav.Link as={Link} to="/cv">{t("CV")}</Nav.Link>
        <Nav.Link as={Link} to="/portfolio">{t("Portfolio")}</Nav.Link>

        <NavDropdown title={t("Language")} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={(): void => changeLanguage("en")} disabled={i18n.language === "en"}>
            {`${t("English")}${i18n.language === "en" ? ` (${t("current")})` : ""}`}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={(): void => changeLanguage("fi")} disabled={i18n.language === "fi"}>
            {`${t("Finnish")}${i18n.language === "fi" ? ` (${t("current")})` : ""}`}
          </NavDropdown.Item>
        </NavDropdown>

       </Nav>

     </Navbar>
   );
};

export default NavigationBar;
