import * as React from "react";
import { withTheme } from "styled-components/macro";
import { NavbarProps } from "./types";
import { Menu as MenuIcon } from "@mui/icons-material";
import NavbarLanguagesDropdown from "./NavbarLanguagesDropdown";
import NavbarUserDropdown from "./NavbarUserDropdown";
import { Grid, Hidden, Toolbar } from "@mui/material";
import { AppBar, IconButton, ThemeSwitch } from "./styled";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { THEMES } from "../../constants";

const Navbar: React.FC<NavbarProps> = ({
  onDrawerToggle,
}): React.ReactElement => {
  const { setTheme, theme } = useContext(ThemeContext);
  const handleThemeSwitch = (): any => {
    setTheme(theme === THEMES.DARK ? THEMES.DEFAULT : THEMES.DARK);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden mdUp smDown>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Grid container>
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <ThemeSwitch
                    data-testid="theme-switch-toggle"
                    onClick={handleThemeSwitch}
                    checked={theme === THEMES.DARK}
                  />
                </Grid>
                <Grid item>
                  <NavbarLanguagesDropdown />
                </Grid>
                <Grid item>
                  <NavbarUserDropdown />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
