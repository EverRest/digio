import React from "react";
import { Box } from "@mui/material";
import { NumericFormat } from "react-number-format";
import {
  DECIMAL_SEPARATOR,
  THOUSAND_SEPARATOR,
  DECIMAL_SCALE,
  Measurement_Units,
} from "../../../constants";
import { useTranslation } from "react-i18next";
import { CardHeader } from "@mui/material";
import { StatsProps } from "./types";
import { Card, CardContent, Typography, Chip } from "./styled";
import kebabCase from "lodash/kebabCase";

import Skeleton from "@mui/material/Skeleton";

const Stats: React.FC<StatsProps> = ({
  title,
  amount,
  chip,
  chipColor = "primary",
  unit,
  menuItems,
  onClick,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ height: "100%" }}>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height="100%" />
      ) : (
        <CardContent
          onClick={onClick}
          data-testid={`${kebabCase(title)}-wrapper`}
        >
          <CardHeader
            sx={{ pt: 0, px: 0 }}
            title={
              <Box display="flex" alignItems="flex-start">
                <Typography
                  component="span"
                  sx={{ wordBreak: "break-word", mr: 2.5 }}
                >
                  {t(`widgets.${title}`)}
                </Typography>
                {!menuItems && chip ? (
                  <Chip color={chipColor} label={`${t(chip)}`} />
                ) : /* istanbul ignore next */ null}
              </Box>
            }
          />
          <Typography variant="h3" mb={3}>
            <Box fontWeight="fontWeightRegular">
              <NumericFormat
                thousandSeparator={THOUSAND_SEPARATOR}
                decimalSeparator={DECIMAL_SEPARATOR}
                decimalScale={DECIMAL_SCALE}
                fixedDecimalScale={unit === Measurement_Units.EURO}
                displayType={"text"}
                value={amount}
              />{" "}
              {unit}
            </Box>
          </Typography>
          {/* {!menuItems && chip ? (
          <Chip color={chipColor} label={`${t(chip)}`} />
        ) : null} */}
        </CardContent>
      )}
    </Card>
  );
};

export default Stats;
