import * as React from "react";
import styled from "styled-components/macro";

import {
  Grid,
  Hidden,
  List,
  ListItemText as MuiListItemText,
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemButton as MuiListItemButton,
} from "@mui/material";
import { COMPANY_NAME } from "../constants";

interface ListItemButtonProps extends MuiListItemButtonProps {
  component?: string;
  href?: string;
}

const Wrapper = styled.div`
  padding: ${(props): string => props.theme.spacing(0.25)}
    ${(props): string => props.theme.spacing(4)};
  background: ${(props): string => props.theme.footer.background};
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const ListItemButton = styled(MuiListItemButton)<ListItemButtonProps>`
  width: auto;
  padding-left: ${(props): string => props.theme.spacing(2)};
  padding-right: ${(props): string => props.theme.spacing(2)};

  &,
  &:hover,
  &:active {
    color: #ff0000;
  }
`;

const ListItemText = styled(MuiListItemText)`
  span {
    color: ${(props): string => props.theme.footer.color};
  }
`;

function Footer(): React.ReactElement {
  return (
    <Wrapper>
      <Grid container spacing={0} justifyContent={"space-between"}>
        <Hidden>
          <Grid container item xs={6} md={6}>
            <List sx={{ display: "flex" }}>
              <ListItemButton component="a" href="#" sx={{ display: "none" }}>
                <ListItemText primary="Support" />
              </ListItemButton>
              <ListItemButton component="a" href="#" sx={{ display: "none" }}>
                <ListItemText primary="Terms of Service" />
              </ListItemButton>
            </List>
          </Grid>
        </Hidden>
        <Grid
          container
          item
          md={6}
          xs={6}
          justifyContent="flex-end"
          sx={{ pr: 15 }}
        >
          <List>
            <ListItemButton disabled>
              <ListItemText
                primary={`© ${new Date().getFullYear()} - ${COMPANY_NAME}`}
              />
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Footer;
