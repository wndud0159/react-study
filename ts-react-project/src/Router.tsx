import React, { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultApp from "./layouts/DefaultApp";
import EmptyApp from "./layouts/EmptyApp";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetUp";
import NotFound from "./pages/NotFound";
import Todo from "./pages/Todo";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultApp />}>
          <Route index element={<AllMeetups />}></Route>
          <Route path="new-meetup" element={<NewMeetup />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Route>
        <Route path="/" element={<EmptyApp />}>
          <Route path="todo" element={<Todo />}></Route>
        </Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
