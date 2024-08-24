import React, {
  useContext,
  useState,
} from "react";
import { ThemeContext } from "styled-components/macro";
import { Outlet } from "react-router-dom";
import { Hidden, CssBaseline } from "@mui/material";
import GlobalStyle from "../../components/GlobalStyle";
import Navbar from "../../components/navbar/Navbar";
import dashboardItems from "../../components/sidebar/dashboardItems";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/Footer";
import SessionTimeoutDialog from "../../components/session/SessionTimeoutDialog";
import { Root, Drawer, AppContent, MainContent } from "./styled";
import { drawerToggleCallback } from "./utils";

const Dashboard: React.FC = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    sidebar: { width: drawerWidth },
  } = useContext(ThemeContext);
  const handleDrawerToggle = drawerToggleCallback(mobileOpen, setMobileOpen);

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <SessionTimeoutDialog />
      <Drawer width={drawerWidth}>
        <Hidden lgUp implementation="js">
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            items={dashboardItems}
          />
        </Hidden>
        <Hidden mdDown implementation="css">
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            items={dashboardItems}
          />
        </Hidden>
      </Drawer>
      <AppContent>
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <MainContent pl={1} pr={3} pb={1}>
          {children}
          <Outlet />
        </MainContent>
        <Footer />
      </AppContent>
    </Root>
  );
};

export default Dashboard;
