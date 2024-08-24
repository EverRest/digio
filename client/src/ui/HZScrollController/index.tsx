/*istanbul ignore file*/

import React, { ReactElement, useCallback, useRef } from "react";
import { Grid, Tooltip } from "@mui/material"
import { ArrowLeft, ArrowRight } from "react-feather"
import { useTranslation } from "react-i18next";

import { HZScrollControllerProps, HZScrollDirection } from "./types";
import { hzScrollLeft, hzScrollRight } from "./utils";
import { StyledButton } from "./styles";

const HZScrollController = ({ scrollerId }: HZScrollControllerProps): ReactElement => {
    const { t } = useTranslation();
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const onMouseDownHandler = useCallback((direction: HZScrollDirection) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (direction === HZScrollDirection.LEFT) {
                hzScrollLeft(scrollerId);
            } else {
                hzScrollRight(scrollerId);
            }
        }, 50);
    }, []);

    const onMouseUpHandler = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    return <Grid item sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
        <Tooltip title={t("scrollLeft")}>
            <StyledButton
                sx={{ mr: 2 }}
                type="button"
                size="small"
                variant="outlined"
                onMouseDown={() => onMouseDownHandler(HZScrollDirection.LEFT)}
                onMouseUp={onMouseUpHandler}
            >
                <ArrowLeft />
            </StyledButton>
        </Tooltip>
        <Tooltip title={t("scrollRight")}>
            <StyledButton
                sx={{ mr: 2 }}
                type="button"
                size="small"
                variant="outlined"
                onMouseDown={() => onMouseDownHandler(HZScrollDirection.RIGHT)}
                onMouseUp={onMouseUpHandler}
            >
                <ArrowRight />
            </StyledButton>
        </Tooltip>
    </Grid>
}

export default HZScrollController
