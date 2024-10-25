import Root from "./routes/root";
import Country from "./routes/country";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>Oops! Something went wrong</div>,
      children: [
        {
          path: "country/:name",
          element: <Country />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

