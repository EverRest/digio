import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@mui/system";
import { NavLink, useParams } from "react-router-dom";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Grid,
  Link,
  Tooltip,
} from "@mui/material";
import { BreadcrumbsLinkText } from "./styled";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

type Props = {
  title: string;
  rightSideControls?: () => React.ReactElement;
  children: React.ReactElement;
  breadcrumbs: {
    to: string;
    name: string;
  }[];
};
/* istanbul ignore next */
export default ({
  title,
  breadcrumbs,
  rightSideControls,
  children,
}: Props): React.ReactElement => {
  const { id } = useParams();

  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Grid item pb={2.5}>
          <Breadcrumbs
            role={"breadcrumbs"}
            aria-label="Breadcrumb"
            sx={{ pl: 5, pt: 1 }}
          >
            {breadcrumbs.map((b, i) => {
              return b.name.length > 35 ? (
                /* istanbul ignore next */ <Tooltip
                  title={b.name}
                  key={`breadcrumb-${i}`}
                >
                  <Link component={NavLink} to={b.to}>
                    <BreadcrumbsLinkText>{b.name}</BreadcrumbsLinkText>
                  </Link>
                </Tooltip>
              ) : (
                <Link key={`breadcrumb-${i}`} component={NavLink} to={b.to}>
                  {b.name}
                </Link>
              );
            })}
            <BreadcrumbsLinkText>{title}</BreadcrumbsLinkText>
          </Breadcrumbs>
        </Grid>
        <Grid item>{id && rightSideControls && rightSideControls()}</Grid>
      </Grid>
      {children}
    </>
  );
};
