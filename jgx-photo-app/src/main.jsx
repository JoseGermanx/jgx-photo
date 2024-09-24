import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import { Analytics } from "@vercel/analytics/react"
import Home from './views/Home';
import Photo from './views/Photo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fotografia-profesional",
        element: <Photo />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
