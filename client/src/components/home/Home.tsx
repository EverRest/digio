import React, {useEffect} from "react";
import {Layout, Responsive, WidthProvider} from "react-grid-layout";
import {Grid} from "@mui/material";
import useWidgets from "./useWidgets";
import {NODE_ENVIRONMENTS} from "../../constants";

const ResponsiveGridLayout = WidthProvider(Responsive);
import {isNodeEnv} from "../../utils/env";
import {getUsers} from "../../api/users";
import {getResources} from "../../api/resources";
import {getWallets} from "../../api/wallets";
import {getAccounts} from "../../api/accounts";

function Default(): React.ReactElement {
    const {
        layout,
        responsiveLayout,
        onLayoutChange,
        widgetIdToComponentMap,
        setUsersWidgetData,
        setResourcesWidgetData,
        setWalletsWidgetData,
        widgetsSideBar,
        handleOnBreakpointChange,
        isDashboardLock,
        setIsDashboardWidgetDataLoading,
        setAccountsWidgetData,
    } = useWidgets({localStorageKey: "dashboard"});

    useEffect((): void => {
        const fetchData = async (): Promise<void> => {
            setIsDashboardWidgetDataLoading(true);
            const usersResponse = await getUsers();
            const usersData = await usersResponse.json();
            setUsersWidgetData(usersData.length ?? 0);
            const resourcesResponse = await getResources();
            const resourcesData = await resourcesResponse.json();
            setResourcesWidgetData(resourcesData.length ?? 0);
            const walletsResponse = await getWallets();
            const walletsData = await walletsResponse.json();
            setWalletsWidgetData(walletsData.length ?? 0);
            const accountsResponse = await getAccounts();
            const accountsData = await accountsResponse.json();
            setAccountsWidgetData(accountsData.length ?? 0);
            setIsDashboardWidgetDataLoading(false);
        };
        fetchData();
    }, []);

    const handleBreakpointChange = (newBreakpoint: string): void =>
        handleOnBreakpointChange(newBreakpoint);

    const isDragDropResizeAvailable = (): boolean =>
        !isDashboardLock && !isNodeEnv(NODE_ENVIRONMENTS.TEST);

    // @ts-ignore
    return (
        <>
            <Grid container>
                <Grid item sx={{pl: 2}}>
                    {widgetsSideBar()}
                </Grid>
            </Grid>
            <Grid container data-testid={"grid-layout-wrapper"}>
                <ResponsiveGridLayout
                    onBreakpointChange={handleBreakpointChange}
                    isDraggable={isDragDropResizeAvailable()}
                    isDroppable={isDragDropResizeAvailable()}
                    isResizable={isDragDropResizeAvailable()}
                    onLayoutChange={(layout, layouts) =>
                        onLayoutChange(layout, layouts)
                    }
                    layouts={responsiveLayout}
                    rowHeight={30}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                >
                    {layout && layout.length > 0 ? (
                        layout.map((item: Layout) => widgetIdToComponentMap[item.i as keyof typeof widgetIdToComponentMap])
                    ) : (
                        <div>No widgets available</div>
                    )}
                </ResponsiveGridLayout>
            </Grid>
        </>
    );
}

export default Default;