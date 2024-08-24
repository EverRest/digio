/*istanbul ignore file*/

import { HZScrollDirection, HZScrollParams } from "./types";

export const hzScrollParams: HZScrollParams = {
    defaultScroll: 0,
    speed: 25,
    distance: 100,
    step: 10
}

export const hzScrollSlider = (element: Element | null, direction: HZScrollDirection, speed: number, distance: number, step: number): void => {
    let scrollAmount = hzScrollParams.defaultScroll;
    const slideTimer = setInterval(function () {
        if (element) {
            if (direction == HZScrollDirection.LEFT) {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
        }

        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}

export const hzScrollLeft = (scrollerId?: number): void => {
    const arrow = document.querySelector(`#hzScroll${scrollerId ?? ""}`)
    hzScrollSlider(arrow, HZScrollDirection.LEFT, hzScrollParams.speed, hzScrollParams.distance, hzScrollParams.step)
}

export const hzScrollRight = (scrollerId?: number): void => {
    const arrow = document.querySelector(`#hzScroll${scrollerId ?? ""}`)
    hzScrollSlider(arrow, HZScrollDirection.RIGHT, hzScrollParams.speed, hzScrollParams.distance, hzScrollParams.step)
}
