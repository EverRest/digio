import * as React from "react";
import styled from "styled-components/macro";
import { Power } from "react-feather";
import { useNavigate } from "react-router-dom";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { route } from "../../utils/url";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown(): React.ReactElement {
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null);
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const toggleMenu = (event: React.SyntheticEvent): void => {
    setAnchorMenu(event.currentTarget);
  };
  /* istanbul ignore next */
  const closeMenu = (): void => {
    setAnchorMenu(null);
  };
  const openProfilePage = (): void => {
    navigate(route("profile.general-information"));
  };
  const handleSignOut = async (): Promise<void> => {
    await signOut();
    navigate(route("sign-in"));
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          data-testid="profile-icon-button"
          aria-owns={anchorMenu ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem
          data-testid="navbar-dropdown-profile"
          onClick={openProfilePage}
        >
          Profile
        </MenuItem>
        <MenuItem
          data-testid="navbar-dropdown-sign-out"
          onClick={handleSignOut}
        >
          Sign out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserDropdown;
