import React, { ReactElement } from "react";
import { TabPanelProps } from "./types";
import { Box } from "@mui/material";
/* istanbul ignore next */
const TabPanel = ({
  children,
  value,
  index,
  ...props
}: TabPanelProps): ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabPanel;
