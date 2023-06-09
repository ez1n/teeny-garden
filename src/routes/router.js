import {createBrowserRouter} from 'react-router-dom';

import App from "../App";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <HomePage/>}
    ],
  },
]);
