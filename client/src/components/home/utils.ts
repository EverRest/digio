import {Layout} from "react-grid-layout";
import {PermissionsRead} from "../../constants";

export const dashboardWidgetsInitData = {
    users: 0,
    accounts: 0,
    wallets: 0,
    resources: 0,
    news: 0,
};

export const deleteWidgetIconStyle = {
    position: "absolute",
    right: "2px",
    fontSize: "15px",
    top: 0,
    cursor: "pointer",
};

export const WIDGET_IDS = Object.freeze({
    USERS: "users",
    ACCOUNTS: "accounts",
    WALLETS: "wallets",
    RESOURCES: "resources",
});

export const WIDGET_IDS_MODULE = Object.freeze({
    [WIDGET_IDS.USERS]: "",
    [WIDGET_IDS.ACCOUNTS]: "",
    [WIDGET_IDS.WALLETS]: "",
    [WIDGET_IDS.RESOURCES]: "",
});

const statsMinMaxSize = {
    minW: 2,
    maxW: 4,
    minH: 3,
    maxH: 4,
};

export const layoutLgInitSettings: Layout[] = [
    {i: WIDGET_IDS.USERS, x: 0, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.ACCOUNTS, x: 3, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.RESOURCES, x: 6, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.WALLETS, x: 0, y: 4, w: 3, h: 3, ...statsMinMaxSize},
];

export const layoutMdInitSettings: Layout[] = [
    {i: WIDGET_IDS.USERS, x: 0, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.ACCOUNTS, x: 3, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.RESOURCES, x: 6, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.WALLETS, x: 0, y: 4, w: 3, h: 3, ...statsMinMaxSize},
];

export const layoutSmInitSettings: Layout[] = [
    {i: WIDGET_IDS.USERS, x: 0, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.ACCOUNTS, x: 3, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.RESOURCES, x: 6, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.WALLETS, x: 0, y: 4, w: 3, h: 3, ...statsMinMaxSize},
];

export const layoutXsInitSettings: Layout[] = [
    {i: WIDGET_IDS.USERS, x: 0, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.ACCOUNTS, x: 3, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.RESOURCES, x: 6, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.WALLETS, x: 0, y: 4, w: 3, h: 3, ...statsMinMaxSize},
];

export const layoutXxsInitSettings: Layout[] = [
    {i: WIDGET_IDS.USERS, x: 0, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.ACCOUNTS, x: 3, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.RESOURCES, x: 6, y: 0, w: 3, h: 3, ...statsMinMaxSize},
    {i: WIDGET_IDS.WALLETS, x: 9, y: 0, w: 3, h: 3, ...statsMinMaxSize},
];

export const responsiveLayoutInitSettings = {
    lg: layoutLgInitSettings,
    md: layoutMdInitSettings,
    sm: layoutSmInitSettings,
    xs: layoutXsInitSettings,
    xxs: layoutXxsInitSettings,
};

export const parseLocalStorageSettings = (
    localStorageKey: string
): {
    layouts: Record<string, Layout[]>;
    activeWidgets: string[];
    isLocked: boolean;
} => {
    const settingsJson = global.localStorage.getItem(localStorageKey) ?? "{}";
    return JSON.parse(settingsJson);
};

export const layoutInitState = (localStorageKey: string): Layout[] => {
    const {layouts} = parseLocalStorageSettings(localStorageKey);
    return layouts ? layouts.lg : layoutLgInitSettings;
};

export const responsiveLayoutInitState = (
    localStorageKey: string
): Record<string, Layout[]> => {
    const {layouts} = parseLocalStorageSettings(localStorageKey);
    return layouts ? layouts : responsiveLayoutInitSettings;
};

export const dashboardLockInitState = (localStorageKey: string): boolean => {
    const {isLocked} = parseLocalStorageSettings(localStorageKey);
    return isLocked === undefined ? true : isLocked;
};

export const permissionsToRead = {
    [WIDGET_IDS.USERS]: [
        PermissionsRead.DASHBOARD,
        PermissionsRead.USER_MANAGEMENT,
    ],
};
