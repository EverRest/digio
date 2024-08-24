/* istanbul ignore file */

import React, { ReactElement, useContext } from "react";
import {
  AppContent,
  Drawer,
  HeaderContainer,
  LoggedInUser,
  Root,
  SkeletonContainer,
} from "./styled";
import { ThemeContext } from "styled-components/macro";
import GlobalStyle from "../../components/GlobalStyle";
import { CssBaseline, Hidden, Skeleton } from "@mui/material";

const SkeletonLoader = (): ReactElement => {
  return (
    <>
      {new Array(10)?.fill(0)?.map((_, index) => (
        <SkeletonContainer key={index}>
          <Skeleton
            variant="circular"
            width={20}
            height={20}
            animation="wave"
          />
          <Skeleton variant="text" width="80%" height={20} animation="wave" />
        </SkeletonContainer>
      ))}
    </>
  );
};

const PageSkeleton = (): ReactElement => {
  const {
    sidebar: { width: drawerWidth },
  } = useContext(ThemeContext);

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Drawer width={drawerWidth}>
        <Hidden lgUp implementation="js">
          <LoggedInUser>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
            <div>
              <Skeleton variant="text" width="100%" animation="wave" />
              <Skeleton variant="text" width="70%" animation="wave" />
            </div>
          </LoggedInUser>
          <SkeletonLoader />
        </Hidden>
      </Drawer>
      <AppContent>
        <HeaderContainer>
          <div>
            <Skeleton
              variant="rectangular"
              width={200}
              height={32}
              animation="wave"
            />
          </div>
          <div>
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              animation="wave"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              animation="wave"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              animation="wave"
            />
            <Skeleton
              variant="circular"
              width={32}
              height={32}
              animation="wave"
            />
          </div>
        </HeaderContainer>
      </AppContent>
    </Root>
  );
};

export default PageSkeleton;
