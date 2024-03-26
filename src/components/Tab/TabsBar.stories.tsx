import { useState } from "react";
import { Tab } from "./Tab";
import { TabContent } from "./TabContent";
import { TabsBar } from "./TabsBar";

export default {
  title: "Layout/Tab",
  component: TabsBar,
};

const tabs = [
  { label: "Zahlungsdaten", key: "first", active: true },
  { label: "Vertragsdaten", key: "second", active: false },
  { label: "Terminal", key: "third", active: false },
];

export const Default = {
  render: () => {
    const [state, setState] = useState(tabs);
    return (
      <>
        <div className="d-flex">
          <TabsBar>
            {state.map((tab, index) => (
              <>
                <Tab
                  key={index}
                  active={tab.active}
                  onChangeTab={() =>
                    setState(
                      state.map((tab, idx) => ({
                        ...tab,
                        active: idx === index,
                      })),
                    )
                  }
                >
                  {tab.label}
                </Tab>
              </>
            ))}
          </TabsBar>
        </div>
        {state[0].active && <TabContent>Hier stehen Zahlungsdaten</TabContent>}
        {state[1].active && <TabContent>Hier stehen Vertragsdaten</TabContent>}
        {state[2].active && <TabContent>Hier stehen Terminaldaten</TabContent>}
      </>
    );
  },
};
