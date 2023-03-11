import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from "./VanDetail";
import Layout from "../components/Layout";

export default function Nav() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}