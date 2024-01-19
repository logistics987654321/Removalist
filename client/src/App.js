import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Faq from "./components/Faq";
import Review from "./components/Review";
import Card from "./components/Card";
import ReactGA from "react-ga"
import { Analytics } from '@vercel/analytics/react';

const LazyLanding = React.lazy(() => import("./components/NextPage"));

const TRACKING_ID="G-JD7YHQYBQ8";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/booking"
            element={
              <React.Suspense fallback="Loading...">
                <LazyLanding />
              </React.Suspense>
            }
          />
          <Route path="/r" element={<Review />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </div>
  );
}

export default App;
