import styled from "styled-components/macro";
import { grey } from "@mui/material/colors";
/* istanbul ignore next */
export const DatePickerWrapper = styled.div`
  .react-datepicker {
    position: absolute !important;
    z-index: 1000000;

    background: ${(props): string => props.theme.palette.background.paper};

    &__header {
      background: ${(props): string => props.theme.palette.background.paper};

      * {
        color: ${(props): string => props.theme.palette.textColor.default};
      }
    }

    &__day {
      color: ${(props): string => props.theme.palette.textColor.default};
      &--disabled {
        color: ${grey[600]};
      }

      &--in-range {
        background: ${(props): string => props.theme.palette.primary.main};
      }
    }
  }
`;
