import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import NewRegister from './pages/NewRegister';
import Product from './pages/Product';
import Productsdetails from './pages/Productsdetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/Login',
    element:<Login></Login>
  },
  {
    path:'/NewRegister',
    element:<NewRegister></NewRegister>
  },
  {
    path:'/Product',
    element:<Product></Product>
  }
  // {
  //   path:'*',
  //   element:<Error404></Error404>
  // }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={allrouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
