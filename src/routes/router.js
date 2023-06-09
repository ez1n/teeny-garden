import {createBrowserRouter} from 'react-router-dom';

import App from "../App";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Home";
import AllProductsPage from "../pages/AllProducts";
import NewProductPage from "../pages/NewProduct";
import ProductDetailPage from "../pages/ProductDetail";
import CartPage from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, path: '/', element: <HomePage/>},
      {path: '/products', element: <AllProductsPage/>},
      {path: '/products/:id', element: <ProductDetailPage/>},
      {path: '/products/new', element: <NewProductPage/>},
      {path: '/cart', element: <CartPage/>}
    ],
  },
]);
