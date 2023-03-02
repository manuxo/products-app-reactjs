import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import SearchBox from './components/SearchBox';

const PRODUCTS_BASE_URL = 'https://dummyjson.com/products';

function App() {

  const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

  const listProducts = async () => {
    const productRes = await fetch(PRODUCTS_BASE_URL);
    const productData = await productRes.json();
    console.log(productData);
    const { products } = productData;
    setProducts(products);
  };

  const searchProducts = async (query) => {
    const productRes = await fetch(`${PRODUCTS_BASE_URL}/search?q=${query}`);
    const productData = await productRes.json();
    console.log(productData);
    const { products } = productData;
    setProducts(products);
  }

  const handleSearchChange = e => {
    console.log("change");
    setDebouncedSearchText(e.target.value);
  };

  useEffect(() => {
    console.log("effect: debouncedSearchText");
    const timer = setTimeout(() => setSearchText(debouncedSearchText), 1000);
    return () => clearTimeout(timer);
  }, [debouncedSearchText])

  useEffect(() => {
    console.log("effect: searchText");
    if (searchText !== '') {
      searchProducts(searchText);
    } else {
      listProducts();
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar />
      <div className='container app-body'>
        <div className='row'>
          <div className='col col-sm-12 col-lg-4 mx-auto text-center'>
            <h4>Products</h4>
          </div>
        </div>
        <SearchBox value={debouncedSearchText} onChange={handleSearchChange}/>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
