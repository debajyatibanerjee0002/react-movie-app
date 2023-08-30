import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Movie from "./pages/Movie";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movie/:id", element: <Movie /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
