import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import AddProduct from './Pages/AddProduct/AddProduct.jsx';
import MyCart from './Pages/MyCart/MyCart.jsx';
import Product from './Product/Product.jsx';
import Details from './Product/Details.jsx';
import Update from './Product/Update.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Error from './Pages/Error/Error.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { 
        path: '/login',
        element: <Login></Login>    
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5001/product'),
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5001/cart')
      },
      {
        path: '/product/:name',
        element: <Product></Product>,
        loader: ({params}) => fetch(`brand.json/${params.name}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: async({params})=> await fetch(`http://localhost:5001/product/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: async({params}) => await fetch(`http://localhost:5001/product/${params.id}`)
      },
      
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
