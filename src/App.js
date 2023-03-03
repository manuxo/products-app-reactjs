import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
  },
  {
    path: 'products/:id',
    element: <ProductDetailsPage/>
  }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container app-body'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
