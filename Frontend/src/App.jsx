import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
