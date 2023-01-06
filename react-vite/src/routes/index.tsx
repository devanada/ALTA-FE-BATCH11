import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages";
import DetailMovie from "../pages/DetailMovie";
import Favorite from "../pages/Favorite";
import Sandbox from "../pages/Sandbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie", // Path param
    element: <DetailMovie />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
