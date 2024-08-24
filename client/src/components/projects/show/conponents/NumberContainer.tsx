import React, { ReactElement } from "react";
import { NumberContainerProps } from "../types";
import { Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import {
  DECIMAL_SCALE,
  DECIMAL_SEPARATOR,
  EMPTY_DATA,
  Measurement_Units,
  THOUSAND_SEPARATOR,
} from "../../../../constants";

/* istanbul ignore next */
const NumberContainer = ({
  value,
  measurementUnits = Measurement_Units.EURO,
}: NumberContainerProps): ReactElement => {
  return (
    <Typography variant="h4">
      {value !== null && value !== undefined ? (
        <>
          <NumericFormat
            thousandSeparator={THOUSAND_SEPARATOR}
            decimalSeparator={DECIMAL_SEPARATOR}
            fixedDecimalScale
            decimalScale={DECIMAL_SCALE}
            displayType={"text"}
            value={value}
          />{" "}
          {measurementUnits}
        </>
      ) : (
        EMPTY_DATA
      )}
    </Typography>
  );
};

export default NumberContainer;
