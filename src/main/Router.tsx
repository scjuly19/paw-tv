import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePageLayout from "./layouts/homepage/HomePageLayout";
import HomePageContainer from "./pages/homepage/HomePageContainer";

export default function RouterComponent() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePageContainer Layout={HomePageLayout} />}
        />
      </Routes>
    </Router>
  );
}
