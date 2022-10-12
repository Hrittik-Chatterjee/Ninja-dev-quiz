
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Statics from './Components/Statics/Statics';
import Faq from './Components/Faq/Faq';
import Home from './Components/Home/Home';

function App() {
  const router =createBrowserRouter([
      {
        path:'/',
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
  ])
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
