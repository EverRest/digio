import React, { ReactElement, useEffect, useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import {
  StyledGridTabs,
  StyledGridTabsContent,
  StyledTabContent,
} from "./styled";
import TabPanel from "../../ui/tabs/tabPanel";
import { simpleTabProps } from "../../ui/tabs/tabPanel/utils";
import { useTranslation } from "react-i18next";
import { TABS, tabsLabels } from "./utils";
import GeneralInformation from "./tabs/generalInformation";
import { useNavigate, useParams } from "react-router-dom";
import camelCase from "lodash/camelCase";
import { route } from "../../utils/url";
/* istanbul ignore next */
const Profile = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tab: tabParam } = useParams();
  const [tab, setTab] = useState<TABS>(TABS.GENERAL_INFORMATION);

  useEffect(() => {
    if (tabParam) setTab(tabParam as TABS);
  }, [tabParam]);

  const handleTabChange = (newTab: TABS): void => {
    navigate(route(`profile.${newTab}`));
  };

  return (
    <Grid container>
      <Grid item sm={12}>
        <StyledGridTabs item xs={12} sm={12}>
          <Tabs
            value={tab}
            onChange={(_: unknown, value: TABS) => handleTabChange(value)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            {tabsLabels.map((tab, index) => (
              <Tab
                value={tab}
                label={t(`profile.${camelCase(tab)}`)}
                {...simpleTabProps(index)}
                key={tab}
              />
            ))}
          </Tabs>
        </StyledGridTabs>
        <StyledGridTabsContent item xs={12} sm={12}>
          <StyledTabContent>
            <TabPanel
              key={TABS.GENERAL_INFORMATION}
              value={tab!}
              index={TABS.GENERAL_INFORMATION}
            >
              <GeneralInformation />
            </TabPanel>
          </StyledTabContent>
        </StyledGridTabsContent>
      </Grid>
    </Grid>
  );
};

export default Profile;
