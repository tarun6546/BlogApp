import React from "react";
// import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteIndex } from "./helpers/RouteName";
import Layout from "./Layout/Layout";
import Index from "./pages/Index";

const App = () => {
  return (
    <div>
      App
      <BrowserRouter>
        <Routes>
          <Route path={RouteIndex} element={<Layout />}>
            <Route index element={<Index />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
