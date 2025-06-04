import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./features/ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error";

const routes = [
  {
    //layout route
    element: <AppLayout />,
    // in case we want to completely change the ui to the error page then error element should places here (for example in page not found and unknown routes)
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        //in case we want to show error just in the place which has been occured we should placed it close to the corresponding route
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  );
}

export default App;
