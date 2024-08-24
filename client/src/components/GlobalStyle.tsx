import { createGlobalStyle } from "styled-components/macro";
import { ThemeProps } from "styled-components/macro";
import { Theme } from "@mui/material";
import { VariantType } from "../theme/variants";
/* istanbul ignore next */

const GlobalStyle = createGlobalStyle<{
  theme: ThemeProps<Theme> & {
    palette: any;
    scrollbar: VariantType["scrollbar"];
    popover: VariantType["popover"];
  };
}>`
  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    background: ${(props): string => props.theme.palette.background.default};
    margin: 0;
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
  .MuiPopover-paper {
    box-shadow: ${(props): string => {
      return props.theme.popover.boxShadow;
    }}
  }
  
  .MuiTableCell-stickyHeader {
    top: 0;
    left: 0;
    z-index: 2;
    position: sticky;
    background-color: ${(props): string =>
      props.theme.palette.background.paper};
  }
  
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props): string => props.theme.scrollbar.horizontal.track};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props): string => props.theme.scrollbar.horizontal.thumb};
    border-radius: 10px;
  }
  
  #root::-webkit-scrollbar-track {
    background: ${(props): string => props.theme.scrollbar.vertical.track};
  }
  
  #root::-webkit-scrollbar-thumb {
    background: ${(props): string => props.theme.scrollbar.vertical.thumb};
  }
`;

export default GlobalStyle;
