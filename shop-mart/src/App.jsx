import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './containers/header/header.component'
import ProductDetails from './containers/product-details/product-details.component';
import ProductsPage from './containers/products-page/products-page.component';

function App() {
  
const router=createBrowserRouter([
  {
    path:"/",
    element:<ProductsPage/>
  },
  {
    path:"/product/:productId",
    element:<ProductDetails/>
  } 
])
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
