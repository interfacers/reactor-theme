import * as React from "react";
import { FC, useRef, useState, ElementType, ReactNode } from "react";
import { OnClick } from "../types";
import useOnClickOutside from "use-onclickoutside";

export type SwitchButtonType = ElementType<{
  activated?: boolean;
  children?: ReactNode;
  onClick: OnClick;
}>;

type Props = {
  Button: SwitchButtonType;
  List: ElementType<{ children: ReactNode }>;
  options: FC[];
};

/** a dropdown menu component with a button opening the menu that contains a list of menu items */
const DropdownMenu: FC<Props> = ({ Button, List, options }) => {
  // hooks up click on toggle button to trigger dropdown open state
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        activated={open}
        // @ts-ignore
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div ref={ref} style={{ visibility: open ? "visible" : "hidden" }}>
        <List>
          {options.map((Option, index) => (
            <Option key={index} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default DropdownMenu;

/** a component with an onClick event */
export type Clickable = ElementType<{
  onClick: OnClick;
}>;
