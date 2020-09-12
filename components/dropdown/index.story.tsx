/* eslint-disable react/display-name */
import React, { FC } from "react";
import styled from "styled-components";
import Dropdown from ".";
import BlueButton from "./ToggleButton";
import RedButton from "./RowButton";
import List from "./Menu";

export default {
  title: "Button",
};

const MenuItemButton = ({ label }: { label: string }) => (
  <Dropdown
    Button={({
      onClick,
    }: {
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    }) => <BlueButton onClick={onClick}>{label}</BlueButton>}
    List={List}
    options={[RedButton, RedButton]}
  />
);

const menuBarItems = ["File", "Edit", "View", "Windows"];
const fileMenuItems = ["New", "Open", "Save", "Quit"];

export const withText: FC = () => (
  <MenuBar>
    {menuBarItems.map((item, index) => (
      <MenuItemButton key={index} label={item} />
    ))}
  </MenuBar>
);

const MenuBar = styled.div`
  display: flex;
`;
