import "@mui/lab/themeAugmentation";

import { createTheme as createMuiTheme } from "@mui/material/styles";
import variants, { VariantType } from "./variants";
import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";
import shadows from "./shadows";
import { Theme } from "@mui/material/styles/createTheme";

export const checkThemeConfig = (name: string): VariantType => {
  let themeConfig = variants.find((variant) => variant.name === name);
  /* istanbul ignore next */
  if (!themeConfig) {
    console.warn(new Error(`The theme ${name} is not valid`));
    themeConfig = variants[0];
  }

  return themeConfig;
};

const createTheme = (name: string): Theme => {
  const themeConfig = checkThemeConfig(name);

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints: breakpoints,
      // @ts-ignore
      components: components,
      typography: typography,
      shadows: shadows,
      palette: themeConfig.palette,
      popover: themeConfig.popover,
      card: themeConfig.card,
      tabs: themeConfig.tabs,
      comments: themeConfig.comments,
      fileManagement: themeConfig.fileManagement,
      tenantRequests: themeConfig.tenantRequests,
      avatarBox: themeConfig.avatarBox,
      table: themeConfig.table,
      border: themeConfig.border,
    },
    {
      name: themeConfig.name,
      header: themeConfig.header,
      footer: themeConfig.footer,
      sidebar: themeConfig.sidebar,
      scrollbar: themeConfig.scrollbar,
      popover: themeConfig.popover,
      card: themeConfig.card,
      tabs: themeConfig.tabs,
      comments: themeConfig.comments,
      fileManagement: themeConfig.fileManagement,
      tenantRequests: themeConfig.tenantRequests,
      border: themeConfig.border,
      avatarBox: themeConfig.avatarBox,
      table: themeConfig.table,
    }
  );
};

export default createTheme;
