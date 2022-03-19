
import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/Login/Login";



const Home = React.lazy(() => import("./containers/Home/Home"));

const Layout = React.lazy(() => import("./components/Layout/Layout"));



export default function Dashboard() {
  
  return (

//Routing with nested route
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>

      <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
  
        </Route>
      </Routes>
      </Suspense >
    </BrowserRouter>


  );
}
