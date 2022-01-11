import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/:id" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
