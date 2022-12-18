import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavigationTabs } from "./interfaces";

export default function NavTabs(props: NavigationTabs) {
  const { tabList, info, currentTab, onChange } = props;
  return (
    <Tabs value={currentTab} onChange={onChange}>
      {tabList.map((tab) => {
        return (
          <Tab
            key={tab.label}
            label={tab.label}
            value={tab.href}
            {...info}
            sx={{
              paddingBottom: "1rem",
              textTransform: "capitalize",
              "&.Mui-selected": {
                fontWeight: "600",
                color: "#286EF1",
                borderBottomColor: "#286EF1",
              },
            }}
          />
        );
      })}
    </Tabs>
  );
}
