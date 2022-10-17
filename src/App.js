
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Statics from './Components/Statics/Statics';
import Faq from './Components/Faq/Faq';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Quiz from './Components/Quiz/Quiz';
import Quizes from './Components/Quizes/Quizes';
import About from './Components/About/About';

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
            path:'/static',
            element:<Statics></Statics>,
            loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
          },
          {
            path:'/faq',
            element:<Faq></Faq>
            
          },
          {
            path:'/quizes/:id',
            element:<Quizes></Quizes>,
            loader: ({params})=>fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
         
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
