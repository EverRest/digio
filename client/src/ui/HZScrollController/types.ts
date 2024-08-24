export enum HZScrollDirection {
    LEFT = "left",
    RIGHT = "right",
}

export interface HZScrollControllerProps {
    scrollerId?: number
}

export interface HZScrollParams {
    defaultScroll: number;
    speed: number;
    distance: number;
    step: number;
}