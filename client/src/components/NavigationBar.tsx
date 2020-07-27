import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

// language selection icon
import { MdTranslate } from "react-icons/md";

// React Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const changeLanguage = (lng: string): void => {
    localStorage.setItem("lng", lng);
    i18n.changeLanguage(lng);
  };

  const emojis = ["🌌", "🌠", "⭐", "✨"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <div id="navbarContainer">
      <Navbar variant="dark" sticky="bottom">
        <Navbar.Brand as={Link} to="/">j3.re</Navbar.Brand>
    
        <Nav>
          <Nav.Link as={Link} to="/cv">{t("CV")}</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">{t("Portfolio")}</Nav.Link>
          <NavDropdown title={randomEmoji} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => history.push("/leave-note")}>{t("Leave a note")}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      
      <Dropdown id="languageSelector">
        <Dropdown.Toggle as={Button} variant="outline-light">
          <MdTranslate />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={(): void => changeLanguage("en")} disabled={i18n.language === "en"}>
            {`${t("ENGLISH NATIVE")}${i18n.language === "en" ? ` (${t("current")})` : ""}`}
          </Dropdown.Item>
          <Dropdown.Item onClick={(): void => changeLanguage("fi")} disabled={i18n.language === "fi"}>
            {`${t("FINNISH NATIVE")}${i18n.language === "fi" ? ` (${t("current")})` : ""}`}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
   );
};

export default NavigationBar;
