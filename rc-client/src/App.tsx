import Paper from "./components/Paper";
import AppHeader from "./components/AppHeader";
import Root from "./routes/root";
import Country from "./routes/country";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Oops! Something went wrong</div>
  },
  {
    path: "/country/:name",
    element: <Country />
  }
]);

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <Paper>
        <AppHeader />
        <RouterProvider router={router} />
      </Paper>
    </div>
  );
};

export default App;
