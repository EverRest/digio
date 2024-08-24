import merge from "deepmerge";
import {
  green,
  grey,
  red,
  deepPurple,
  purple,
  indigo,
  blue,
  blueGrey,
  orange,
} from "@mui/material/colors";
import { crimsonColor, THEMES } from "../constants";
import shadows from "./shadows";

export const graphite = {
  500: "#233044",
};
const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    mode: "light",
    textColor: {
      default: grey[900],
      errorColor: "#f44336",
    },
    primary: {
      main: blue[700],
      contrastText: "#FFF",
    },
    red: {
      ...red,
      light: red[300],
      main: red[600],
      dark: red[800],
    },
    crimson: crimsonColor,
    secondary: {
      main: blue[500],
      contrastText: "#FFF",
    },
    background: {
      default: "#EEEEEE",
      paper: "#FFF",
      hover: grey[100],
      active: grey[200],
    },
    deepPurple,
    purple,
    indigo,
    grey,
    green,
    orange,
  },
  header: {
    color: grey[500],
    background: "#EEEEEE",
    search: {
      color: grey[800],
    },
    indicator: {
      background: blue[600],
    },
  },
  footer: {
    color: grey[500],
    background: "#FFF",
  },
  sidebar: {
    width: "258px",
    color: grey[200],
    background: graphite[500],
    header: {
      color: grey[200],
      background: graphite[500],
      brand: {
        color: blue[500],
      },
    },
    footer: {
      color: grey[200],
      background: "#1E2A38",
      online: {
        background: green[500],
      },
    },
    badge: {
      color: "#FFF",
      background: blue[500],
    },
  },
  scrollbar: {
    horizontal: {
      track: "transparent",
      thumb: grey[400],
    },
    vertical: {
      track: "transparent",
      thumb: grey[400],
    },
  },
  popover: {
    boxShadow: shadows[2],
  },
  card: {
    cardShadow: shadows[5],
  },
  tabs: {
    textColor: blue[800],
    hover: grey[400],
  },
  comments: {
    textColor: grey[800],
  },
  border: {
    color: grey[300],
  },
  fileManagement: {
    background: "#e8f0fe",
  },
  tenantRequests: {
    background: {
      bg1: grey[50],
      bg2: grey[200],
      bg3: grey[300],
      bg4: grey[400],
      ticketNumberBadge: grey[200],
    },
    color: {
      propertyName: blueGrey[700],
      areaName: blueGrey[700],
      title: blueGrey[600],
      ticketNumberBadge: blueGrey[700],
      createdAt: blueGrey[300],
    },
    border: {
      areaName: blueGrey[100],
      propertyName: blueGrey[100],
    },
  },
  avatarBox: {
    background: "rgb(55, 111, 208)",
  },
  table: {
    borderBottom: "rgba(81,81,81,1)",
    headerBGColor: "rgb(205 205 205)",
    defaultBGColor: "default",
    lightBgColor: "rgb(247 250 252)",
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK,
  palette: {
    mode: "dark",
    textColor: {
      default: "#FFF",
      errorColor: "#f44336",
    },
    primary: {
      main: blue[600],
      contrastText: "#FFF",
    },
    red: {
      ...red,
      light: red[300],
      main: red[600],
      dark: red[800],
      crimson: "rgba(222, 5, 0, 0.37)",
    },
    background: {
      default: "#1B2635",
      paper: graphite[500],
      hover: "#33425e",
      active: "#2f3e57",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
    deepPurple,
    purple,
    indigo,
    grey,
    green,
  },
  header: {
    color: grey[300],
    background: "#1B2635",
    search: {
      color: grey[200],
    },
  },
  footer: {
    color: grey[300],
    background: graphite[500],
  },
  scrollbar: {
    horizontal: {
      track: graphite[500],
      thumb: "#1B2635",
    },
    vertical: {
      track: "transparent",
      thumb: graphite[500],
    },
  },
  popover: {
    boxShadow: shadows[3],
  },
  card: {
    cardShadow: shadows[4],
  },
  tabs: {
    textColor: blue[700],
    hover: blue[600],
  },
  comments: {
    textColor: grey[500],
  },
  fileManagement: {
    background: "rgba(255,255,255,0.08)",
  },
  tenantRequests: {
    background: {
      bg1: "#253246",
      bg2: "#28364b",
      bg3: "#2b3a4f",
      bg4: "#2e3e54",
      ticketNumberBadge: grey[700],
    },
    color: {
      propertyName: blueGrey[200],
      areaName: blueGrey[200],
      title: blueGrey[50],
      ticketNumberBadge: grey[100],
      createdAt: blueGrey[300],
    },
    border: {
      areaName: grey[800],
      propertyName: grey[800],
    },
  },
  avatarBox: {
    background: "rgb(55, 111, 208)",
  },
  table: {
    borderBottom: "rgba(81,81,81,1)",
    headerBGColor: "rgb(29 37 52)",
    defaultBGColor: "rgb(41 59 81 / 80%)",
    lightBgColor: "default",
  },
  border: {
    color: grey[700],
  },
});

const variants: Array<VariantType> = [darkVariant, defaultVariant];

export default variants;

export type VariantType = {
  name: string;
  palette: {
    primary: MainContrastTextType;
    secondary: MainContrastTextType;
  };
  header: ColorBgType & {
    search: {
      color: string;
    };
    indicator: {
      background: string;
    };
  };
  footer: ColorBgType;
  sidebar: ColorBgType & {
    header: ColorBgType & {
      brand: {
        color: string;
      };
    };
    footer: ColorBgType & {
      online: {
        background: string;
      };
    };
    badge: ColorBgType;
  };
  scrollbar: {
    horizontal: {
      track: string;
      thumb: string;
    };
    vertical: {
      track: string;
      thumb: string;
    };
  };
  popover: {
    boxShadow: string;
  };
  card: {
    cardShadow: string;
  };
  tabs: {
    hover: string;
  };
  comments: {
    textColor: string;
  };
  border: {
    color: string;
  };
  fileManagement: {
    background: string;
  };
  tenantRequests: {
    background: {
      bg1: string;
      bg2: string;
      bg3: string;
      bg4: string;
    };
    color: {
      propertyName: string;
    };
    border: {
      areaName: string;
      propertyName: string;
    };
  };
  avatarBox: {
    background: string;
  };
  table: {
    borderBottom: string;
  };
};

type MainContrastTextType = {
  main: string;
  contrastText: string;
};

type ColorBgType = {
  color: string;
  background: string;
};
