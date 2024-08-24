import styled from "styled-components";

export const LogoImage = styled.img`
  object-fit: contain;
`;

export const ManageModules = styled.span`
  margin-left: ${(props): string => props.theme.spacing(2.5)};
  display: inline-flex;
  cursor: pointer;
`;
