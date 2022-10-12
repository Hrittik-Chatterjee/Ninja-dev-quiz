
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './Components/About/About';
import Statics from './Components/Statics/Statics';
import Faq from './Components/Faq/Faq';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';

function App() {
  const router =createBrowserRouter([
      {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <Error></Error> ,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children :[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/statics',
            element:<Statics></Statics>
          },
          {
            path:'/faq',
            element:<Faq></Faq>
          }
        ]
      }
      
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
