import React, { useState } from "react";
import { NavigationItem } from "./NavigationItem";

const Navigation = ({ items }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      {items.map((item) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Navigation;
