import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AnimeList from "../pages/AnimeList";
import ForumPage from "../pages/ForumPage";



function AppRoutes(props) {
  return (
    <Routes className="Routes">
      <Route path="login" element={<LoginPage {...props} />} />
      <Route index element={<Homepage {...props} />} />
      <Route path="anime" element={<AnimeList {...props} />} />
      <Route path="profile" element={<ProfilePage {...props} />} />
      <Route path="forum" element={<ForumPage {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
