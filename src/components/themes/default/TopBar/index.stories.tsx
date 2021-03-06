import * as React from "react";
import { FC } from "react";

import Topbar from "./index";

export default { title: "TopBar" };

export const TopBarTest: FC = () => (
  <div style={{ height: "150vh" }}>
    <Topbar hideOnDownScroll>
      <div
        style={{
          borderBottom: "1px solid rgba(30, 30, 30, 0.1)",
          height: 75,
          backgroundColor: "white",
        }}
      >
        HelloMotto!
      </div>
    </Topbar>
  </div>
);
