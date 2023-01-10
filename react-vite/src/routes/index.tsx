import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";

import Homepage from "pages";
import DetailMovie from "pages/DetailMovie";
import Favorite from "pages/Favorite";
import Sandbox from "pages/Sandbox";

import { setFavorites } from "utils/redux/reducers/reducer";
import { ThemeContext } from "utils/context";

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
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getFavMovies = localStorage.getItem("FavMovie");
    if (getFavMovies) {
      dispatch(setFavorites(JSON.parse(getFavMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
