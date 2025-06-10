import React from "react";
// import { Button } from "./components/ui/button";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      App
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            /blog
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
