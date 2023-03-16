import React from "react";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans, { loader as vansLoader } from '../pages/Vans/Vans';
import VanDetail from "../pages/Vans/VanDetail";
import Layout from "./Layout";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostLayout from "./HostLayout";
import HostVans from "../pages/Host/HostVans";
import HostVanDetail from "../pages/Host/HostVanDetail";
import HostVanPricing from "../pages/Host/HostVanPricing";
import HostVanPhotos from "../pages/Host/HostVanPhotos";
import HostVanInfo from "../pages/Host/HostVanInfo";
import NotFound from "./NotFound";
import Error from "./Error"
import Login, {action as loginAction} from "../pages/Login";
import AuthRequired from "./AuthRequired"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader}  errorElement={<Error />}/>
    <Route path="vans/:id" element={<VanDetail />} />
    <Route
      path="login"
      element={<Login />}
      action={loginAction}
    />
    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function Nav() {
  return(
    <RouterProvider router={router} />
  )
}