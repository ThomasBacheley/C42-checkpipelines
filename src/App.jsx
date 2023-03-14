import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ConfigPage from "./components/ConfigPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;