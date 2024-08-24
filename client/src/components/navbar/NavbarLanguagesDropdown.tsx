import * as React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

type languageOptionsType = {
  [key: string]: {
    icon: string;
    name: string;
  };
};

const languageOptions: languageOptionsType = {
  de: {
    icon: "/static/img/flags/de.png",
    name: "German",
  },
  en: {
    icon: "/static/img/flags/us.png",
    name: "English",
  },
  ua: {
    icon: "/static/img/flags/ua.png",
    name: "Ukrainian",
  },
  ru: {
    icon: "/static/img/flags/ru.png",
    name: "Russian",
  },
};

function NavbarLanguagesDropdown(): React.ReactElement {
  const { i18n } = useTranslation();
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null);

  const selectedLanguage = languageOptions[i18n.language];

  const toggleMenu = (event: React.SyntheticEvent): void => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = (): void => {
    setAnchorMenu(null);
  };
  /* istanbul ignore next */
  const handleLanguageChange = async (language: string): Promise<void> => {
    i18n.changeLanguage(language);
    window.localStorage.setItem("lang", language);
    closeMenu();

    window.location.reload();
  };

  return (
    <React.Fragment>
      <Tooltip title="Languages">
        <IconButton
          data-testid="lang-icon-button"
          aria-owns={anchorMenu ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Flag src={selectedLanguage.icon} alt={selectedLanguage.name} />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {Object.keys(languageOptions).map((language) => (
          <MenuItem
            data-testid="dropdown-lang-option"
            key={language}
            onClick={() => handleLanguageChange(language)}
          >
            {languageOptions[language].name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default NavbarLanguagesDropdown;
