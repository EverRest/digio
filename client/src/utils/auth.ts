import {dateNowSeconds} from "./date";

export const setSession = (
    accessToken: string | null,
    tokenExpirationDate: number
): void => {
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem(
            "tokenExpirationDate",
            JSON.stringify(tokenExpirationDate)
        );
    } else {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenExpirationDate");
    }
};

export const isSessionExpired = (): boolean => {
    const tokenExpirationDate =
        parseInt(window.localStorage.getItem("tokenExpirationDate") || "0", 10);
    return tokenExpirationDate < dateNowSeconds();
};

export const accessToken = (): string | null => {
    return localStorage.getItem("accessToken");
};
