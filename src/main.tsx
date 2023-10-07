import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/store/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import Home from "./pages/home/Home.tsx";
import MovieDetails from "./pages/movieDetails/MovieDetails.tsx";
import Movies from "./pages/movies/Movies.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie-details/:id",
        element: <MovieDetails />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
