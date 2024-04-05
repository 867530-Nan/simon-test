// App.js
import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import { fetchData } from "./data.js";

function App() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetchData().then(setNavItems); // Assuming fetchData returns a promise
  }, []);

  return (
    <div className="App">
      <Navigation items={navItems} />
    </div>
  );
}

export default App;
