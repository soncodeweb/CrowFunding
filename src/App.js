import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SignInPage from "./pages/SignInPage";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}>
          <Route path="/" element={<div>Dashboard</div>}></Route>
          <Route path="/campaign" element={<div>Campaign</div>}></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
