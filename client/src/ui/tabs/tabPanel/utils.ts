import { TabAreaControls } from "./types";
/* istanbul ignore next */
export const simpleTabProps = (index: number): TabAreaControls => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});
