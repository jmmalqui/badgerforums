import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./pages/landing";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import Search from "./pages/search";
import Images from "./pages/images";
import Latest from "./pages/latest";
import More from "./pages/more";
import SignInName from "./pages/signin/signin_name";
import SignInPassword from "./pages/signin/signin_pw";
import SignUp from "./pages/signup/signup";
import SignInComplete from "./pages/signin/signin_complete";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="search" element={<Search />} />
      <Route path="images" element={<Images />} />
      <Route path="latest" element={<Latest />} />
      <Route path="more" element={<More />} />
      <Route path="signinname" element={<SignInName />} />
      <Route path="signinname/signinpw" element={<SignInPassword />} />
      <Route
        path="signinname/signinpw/signincomplete"
        element={<SignInComplete />}
      />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
