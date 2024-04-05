import React, { useState } from "react";

const NavigationItem = ({ item, depth = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = Boolean(item.children && item.children.length);

  // Custom styles for dropdowns based on depth
  const dropdownStyles = {
    display: "block",
    position: "absolute",
    left: depth === 0 ? "0" : "100%", // Align side dropdowns only for top-level items
    top: "100%", // Align sub-categories directly below their parent
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1000,
  };

  return (
    <div
      style={{
        position: depth === 0 ? "relative" : "initial", // Use 'initial' to stack vertically for nested items
        display: "inline-block",
        textAlign: "center",
        padding: depth === 0 ? "14px 20px" : "12px",
        fontSize: depth === 0 ? "16px" : "14px",
        backgroundColor: depth === 0 ? "#333" : "#f1f1f1",
        color: depth === 0 ? "white" : "black",
        cursor: "pointer",
        whiteSpace: depth === 0 ? "nowrap" : "normal",
        borderBottom: depth > 0 ? "1px solid #ddd" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.name}
      {hasChildren && isHovered && (
        <div style={dropdownStyles}>
          {item.children.map((child) => (
            <NavigationItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

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
