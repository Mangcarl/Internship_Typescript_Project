import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './screens/contact';
import StationName from './screens/station/station-page';
import AdminPage from './screens/admin/cards';
import Service from './screens/service/service';
import ContactPage from './screens/contact/contact-page';
import { Test } from './screens/test';
import RealAdmin from './screens/admin/real-admin';
import Cards from './screens/admin/cards';
import StationsTable from './screens/admin/stations-table';
import Settings from './screens/admin/settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home/>,
  },

  { 
    path: "/home",
    element: <Home/>,
  },

  { 
    path: "/stations/:station/:inout",
    element: <StationName/>
  },

  { 
    path: "/stations",
    element: <StationName/>
  },
  

  { 
    path: "/contact",
    element: <ContactPage />,
  },

  {
    path: "/admin",
    element: <RealAdmin/>
  },

  {
    path: "/services",
    element: <Service/>
  },

  {
    path: "/admin/cards",
    element: <Cards/>
  },

  {
    path: "/admin/stations-table",
    element: <StationsTable/>
  },

  {
    path: "/admin/settings",
    element: <Settings/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
