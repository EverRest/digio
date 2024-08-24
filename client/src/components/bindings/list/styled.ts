import styled from "styled-components/macro";

export const Status = styled.div.attrs((props: any) => ({
  type: props.type,
}))`
  width: 10px;
  height: 10px;
  background: ${(props): string => {
    switch (props.type) {
      case "error":
        return props.theme.palette.red[500];
      default:
        return props.theme.palette.green[500];
    }
  }};
  border-radius: 50%;
`;

export const ProfilePhotoContainer = styled.div`
  input {
    display: none;
  }
  svg {
    cursor: pointer;
  }

  img {
    border-radius: 50%;
    max-height: ${(props): string => props.theme.spacing(38)};
    max-width: ${(props): string => props.theme.spacing(38)};

  }
`;
