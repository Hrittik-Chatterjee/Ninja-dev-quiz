import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Statics from "./Components/Statics/Statics";
import Faq from "./Components/Faq/Faq";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import Quizes from "./Components/Quizes/Quizes";
import Signup from "./Components/Signup/Signup";
import PrivateRoute from "./privateroute/PrivateRoute";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
      loader: () => fetch("https://ninja-dev-quiz-server.onrender.com/quizes"),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/static",
          element: <Statics></Statics>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "/quizes/:id",
          element: (
            <PrivateRoute>
              <Quizes />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://ninja-dev-quiz-server.onrender.com/quizes/${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
