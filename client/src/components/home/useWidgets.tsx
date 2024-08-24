import Stats from "./stats/Stats";
import React, {ReactElement, useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Layout} from "react-grid-layout";
import WidgetsIcon from "@mui/icons-material/Widgets";
import map from "lodash/map";
import {
    dashboardLockInitState,
    dashboardWidgetsInitData,
    deleteWidgetIconStyle,
    layoutInitState,
    responsiveLayoutInitSettings,
    responsiveLayoutInitState,
    WIDGET_IDS,
} from "./utils";
import {Checkbox, FormControlLabel, FormGroup, Switch} from "@mui/material";
import {useTranslation} from "react-i18next";
import {
    DashboardLockSection,
    WidgetsList,
    WidgetsSideBarButton,
} from "./styled";
import kebabCase from "lodash/kebabCase";
import {useNavigate} from "react-router-dom";
import {route} from "../../utils/url";

const useWidgets = ({
                        localStorageKey,
                    }: {
    localStorageKey: string;
}): UseWidgetsReturnType => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const [isWidgetsSidebarActive, setIsWidgetsSidebarActive] = useState(true);
    const [isDashboardLock, setIsDashboardLock] = useState(
        dashboardLockInitState(localStorageKey)
    );

    const [activeBreakpoint, setActiveBreakpoint] =
        useState<BreakpointType | null>("lg");

    const [isDashboardWidgetDataLoading, setIsDashboardWidgetDataLoading] =
        useState(true);

    const [usersWidgetData, setUsersWidgetData] = useState(
        dashboardWidgetsInitData.users
    );

    const [walletsWidgetData, setWalletsWidgetData] = useState(
        dashboardWidgetsInitData.users
    );

    const [resourcesWidgetData, setResourcesWidgetData] = useState(
        dashboardWidgetsInitData.users
    );

    const [accountsWidgetData, setAccountsWidgetData] = useState(
        dashboardWidgetsInitData.users
    );

    const [hoveredWidget, setHoveredWidget] = useState("");
    const [layout, setLayout] = useState<Layout[]>(
        layoutInitState(localStorageKey)
    );

    const [responsiveLayout] = useState<Record<string, Layout[]>>(
        responsiveLayoutInitState(localStorageKey)
    );
    /* istanbul ignore next */
    const showCloseIcon = (name: string): ReactElement => {
        if (hoveredWidget === name && !isDashboardLock)
            return (
                <CloseIcon
                    sx={deleteWidgetIconStyle}
                    onClick={() => handleCloseWidget(name)}
                    data-testid="widget-close"
                />
            );
        else return <></>;
    };

    const usersWidget = (): ReactElement => (
        <Stats
            title={WIDGET_IDS.USERS}
            amount={Math.round(usersWidgetData).toString()}
            chip="widgets.total"
            isLoading={isDashboardWidgetDataLoading}
            onClick={() => navigate(route("users"))}
        />
    );

    const accountsWidget = (): ReactElement => (
        <Stats
            title={WIDGET_IDS.ACCOUNTS}
            amount={Math.round(accountsWidgetData).toString()}
            chip="widgets.total"
            isLoading={isDashboardWidgetDataLoading}
            onClick={() => navigate(route("account"))}
        />
    );

    const resourcesWidget = (): ReactElement => (
        <Stats
            title={WIDGET_IDS.RESOURCES}
            amount={Math.round(resourcesWidgetData).toString()}
            chip="widgets.total"
            isLoading={isDashboardWidgetDataLoading}
            onClick={() => navigate(route("resource"))}
        />
    );

    const walletsWidget = (): ReactElement => (
        <Stats
            title={WIDGET_IDS.WALLETS}
            amount={Math.round(walletsWidgetData).toString()}
            chip="widgets.total"
            isLoading={isDashboardWidgetDataLoading}
            onClick={() => navigate(route("wallet"))}
        />
    );

    const widgetIdToComponentMap: {
        [key: string]: React.JSX.Element;
        users: React.JSX.Element;
        accounts: React.JSX.Element;
        wallets: React.JSX.Element;
        resources: React.JSX.Element;
    } = {
        users: (
            <div
                key={WIDGET_IDS.USERS}
                onMouseEnter={() => setHoveredWidget(WIDGET_IDS.USERS)}
                onMouseLeave={() => setHoveredWidget("")}
                data-testid="widget-users"
                data-grid={responsiveLayoutInitSettings[activeBreakpoint!].find(
                    (el) => el.i === WIDGET_IDS.USERS
                )}
            >
                {usersWidget()}
                {showCloseIcon(WIDGET_IDS.USERS)}
            </div>
        ),
        accounts: (
            <div
                key={WIDGET_IDS.ACCOUNTS}
                onMouseEnter={() => setHoveredWidget(WIDGET_IDS.ACCOUNTS)}
                onMouseLeave={() => setHoveredWidget("")}
                data-testid="widget-accounts"
                data-grid={responsiveLayoutInitSettings[activeBreakpoint!].find(
                    (el) => el.i === WIDGET_IDS.ACCOUNTS
                )}
            >
                {accountsWidget()}
                {showCloseIcon(WIDGET_IDS.ACCOUNTS)}
            </div>
        ),
        wallets: (
            <div
                key={WIDGET_IDS.WALLETS}
                onMouseEnter={() => setHoveredWidget(WIDGET_IDS.WALLETS)}
                onMouseLeave={() => setHoveredWidget("")}
                data-testid="widget-wallets"
                data-grid={responsiveLayoutInitSettings[activeBreakpoint!].find(
                    (el) => el.i === WIDGET_IDS.WALLETS
                )}
            >
                {walletsWidget()}
                {showCloseIcon(WIDGET_IDS.WALLETS)}
            </div>
        ),
        resources: (
            <div
                key={WIDGET_IDS.RESOURCES}
                onMouseEnter={() => setHoveredWidget(WIDGET_IDS.RESOURCES)}
                onMouseLeave={() => setHoveredWidget("")}
                data-testid="widget-resources"
                data-grid={responsiveLayoutInitSettings[activeBreakpoint!].find(
                    (el) => el.i === WIDGET_IDS.RESOURCES
                )}
            >
                {resourcesWidget()}
                {showCloseIcon(WIDGET_IDS.RESOURCES)}
            </div>
        ),
    };

    /* istanbul ignore next */
    const handleOnBreakpointChange = (newBreakpoint: string): void => {
        setActiveBreakpoint(newBreakpoint as BreakpointType);
    };

    const toggleWidget = (
        event: React.ChangeEvent<HTMLInputElement>,
        item: string
    ): void => {
        if (event.target.checked) {
            const layoutInit = responsiveLayoutInitSettings[activeBreakpoint!];
            const itemToAdd = layoutInit.find((el) => el.i === item);
            setLayout((layout) => {
                layout.push(itemToAdd!);
                return [...layout];
            });
        } else {
            setLayout((layout) => [...layout.filter((l: Layout) => l.i !== item)]);
        }
    };

    const onLayoutChange = (
        layout: Layout[],
        responsiveLayout: Record<string, Layout[]>
    ): void => {
        /* istanbul ignore else */
        if (localStorage) {
            const settings = localStorage.getItem(localStorageKey)
                ? JSON.parse(localStorage.getItem(localStorageKey)!)
                : {};
            settings.layouts = responsiveLayout;
            localStorage.setItem(localStorageKey, JSON.stringify(settings));
        } else {
            setLayout(layout);
        }
    };
    /* istanbul ignore next */
    const handleCloseWidget = (name: string): void => {
        setLayout((layout) => layout.filter((l: Layout) => l.i !== name));
    };

    const handleOnWidgetsSidebarButtonClick = (): void => {
        setIsWidgetsSidebarActive((val) => !val);
    };

    const handleLock = (): void => {
        /* istanbul ignore else */
        if (localStorage) {
            const settings = JSON.parse(localStorage.getItem(localStorageKey)!);
            settings.isLocked = !isDashboardLock;
            localStorage.setItem(localStorageKey, JSON.stringify(settings));
        }
        setIsDashboardLock((val) => !val);
    };
    /* istanbul ignore next */
    const widgetsSideBar = (): ReactElement => (
        <>
            <WidgetsList $isHidden={isWidgetsSidebarActive} elevation={2}>
                <div>
                    <WidgetsSideBarButton
                        $isHidden={isWidgetsSidebarActive}
                        startIcon={<WidgetsIcon/>}
                        variant="outlined"
                        onClick={() => handleOnWidgetsSidebarButtonClick()}
                        data-testid="widgets-sidebar-button"
                    >
                        Widgets
                    </WidgetsSideBarButton>
                </div>
                {lockWidget()}
                <div>
                    <FormGroup sx={{px: 2}}>
                        {Object.values(WIDGET_IDS).map((item: string) => (
                            <FormControlLabel
                                key={`id-${item}`}
                                control={
                                    <Checkbox
                                        checked={map(layout, "i").includes(item)}
                                        onChange={(e) => toggleWidget(e, item)}
                                        data-testid={`${kebabCase(item)}-checkbox`}
                                    />
                                }
                                label={t(`widgets.${item}`)}
                            />
                        ))}
                    </FormGroup>
                </div>
            </WidgetsList>
        </>
    );

    const lockWidget = (): ReactElement => (
        <DashboardLockSection>
            <FormControlLabel
                control={
                    <Switch
                        checked={isDashboardLock}
                        onChange={() => handleLock()}
                        data-testid="widgets-sidebar-lock-button"
                    />
                }
                label={t("home.lockDashboard")}
            />
        </DashboardLockSection>
    );
    return {
        layout,
        responsiveLayout,
        handleCloseWidget,
        widgetIdToComponentMap,
        setActiveBreakpoint,
        handleOnBreakpointChange,
        widgetsSideBar,
        onLayoutChange,
        setUsersWidgetData,
        setResourcesWidgetData,
        setWalletsWidgetData,
        setAccountsWidgetData,
        isDashboardLock,
        setIsDashboardWidgetDataLoading,
    };
};

export default useWidgets;

export type BreakpointType = "lg" | "md" | "sm" | "xs" | "xxs";

interface UseWidgetsReturnType {
    layout: Layout[];
    responsiveLayout: Record<string, Layout[]>;
    handleCloseWidget: (name: string) => void;
    widgetIdToComponentMap: {
        users: React.JSX.Element;
        accounts: React.JSX.Element;
        wallets: React.JSX.Element;
        resources: React.JSX.Element;
    };
    setActiveBreakpoint: (value: ((prevState: BreakpointType | null) => BreakpointType | null) | BreakpointType | null) => void;
    handleOnBreakpointChange: (newBreakpoint: string) => void;
    widgetsSideBar: () => React.ReactElement;
    onLayoutChange: (layout: Layout[], responsiveLayout: Record<string, Layout[]>) => void;
    setUsersWidgetData: (value: ((prevState: number) => number) | number) => void;
    setResourcesWidgetData: (value: ((prevState: number) => number) | number) => void;
    setWalletsWidgetData: (value: ((prevState: number) => number) | number) => void;
    setAccountsWidgetData: (value: ((prevState: number) => number) | number) => void;
    isDashboardLock: boolean;
    setIsDashboardWidgetDataLoading: (value: ((prevState: boolean) => boolean) | boolean) => void;
}
