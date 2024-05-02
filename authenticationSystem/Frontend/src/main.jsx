import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import Store from './App/store.js';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ShowAll from './components/ShowAll.jsx';
import Profile from './components/Profile.jsx';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import PageNotFound from './components/PageNotFound.jsx';
const router=createBrowserRouter(
  [
    {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
    ]
    },
    {
path:"/showall",
element:<ShowAll/>
    },
    {
      path:"*",
      element:<PageNotFound/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}>

    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
