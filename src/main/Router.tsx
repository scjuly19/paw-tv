import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header/index";
import { HomePageLayout } from "./layouts/homepage";
import HomePageContainer from "./pages/homepage/HomePageContainer";
import TrendingPageContainer from "./pages/TrendingPage/TrendingPageContainer";
import { TrendingPageLayout } from "./layouts/trendingPage";
import VideosPageContainer from "./pages/VideosPage/VideosPageContainer";
import { VideosPageLayout } from "./layouts/videosPage";

export default function RouterComponent() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePageContainer Layout={HomePageLayout} />}
        />
        <Route
          path="/trending"
          element={<TrendingPageContainer Layout={TrendingPageLayout} />}
        />
        <Route
          path="/videos"
          element={<VideosPageContainer Layout={VideosPageLayout} />}
        />
      </Routes>
    </Router>
  );
}
