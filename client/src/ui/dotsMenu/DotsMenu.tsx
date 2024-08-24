import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DotsMenuProps } from "./types";
import { useTranslation } from "react-i18next";
/* istanbul ignore next */
const ITEM_HEIGHT = 48;
/* istanbul ignore next */
const DotsMenu = ({ options, trigger }: DotsMenuProps): React.ReactElement => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {trigger}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "30ch",
          },
        }}
      >
        {options.map(({ name, callback }) => (
          <MenuItem
            key={name}
            onClick={() => {
              callback && callback();
              handleClose();
            }}
          >
            {t(name)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DotsMenu;
