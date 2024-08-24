import React from "react";
import styled from "styled-components/macro";
import { CircularProgress } from "@mui/material";

const Root = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
  margin: ${(props): string => props.theme.spacing(0)};
`;
type LoaderProps = {
  size?: string | number | undefined;
};

function Loader({ size }: LoaderProps): React.ReactElement {
  return (
    <Root>
      <CircularProgress size={size} color="inherit" />
    </Root>
  );
}

export default Loader;
