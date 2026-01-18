import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

// Home Components
import Home from './components/home/Home';
import Contact from './components/home/Contact';

// Product Components
import ProductList from './components/products/ProductList';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from './components/products/EditProduct';
import DeleteProduct from './components/products/DeleteProduct';
import ProductDetails from './components/products/ProductDetails';

// Watch List Components
import WatchListIndex from './components/watchlist/WatchListIndex';
import CreateWatchListItem from './components/watchlist/CreateWatchListItem';
import EditWatchListItem from './components/watchlist/EditWatchListItem';
import DeleteWatchListItem from './components/watchlist/DeleteWatchListItem';
import WatchListDetails from './components/watchlist/WatchListDetails';

function App() {
  return (
    <DataProvider>
      <Router>
        <header>
          <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
              <Link className="navbar-brand" to="/">Duncan Safe Product</Link>
              <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                <ul className="navbar-nav flex-grow-1">
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">Product List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/watchlist">Watch List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="container">
          <main role="main" className="pb-3">
            <Routes>
              {/* Home Routes */}
              <Route path="/" element={<ProductList />} />
              <Route path="/welcome" element={<Home />} />
              <Route path="/contact" element={<Contact />} />

              {/* Product Routes */}
              <Route path="/products/create" element={<CreateProduct />} />
              <Route path="/products/edit/:id" element={<EditProduct />} />
              <Route path="/products/delete/:id" element={<DeleteProduct />} />
              <Route path="/products/details/:id" element={<ProductDetails />} />

              {/* Watch List Routes */}
              <Route path="/watchlist" element={<WatchListIndex />} />
              <Route path="/watchlist/create" element={<CreateWatchListItem />} />
              <Route path="/watchlist/edit/:id" element={<EditWatchListItem />} />
              <Route path="/watchlist/delete/:id" element={<DeleteWatchListItem />} />
              <Route path="/watchlist/details/:id" element={<WatchListDetails />} />
            </Routes>
          </main>
        </div>

        <footer className="border-top footer text-muted">
          <div className="container">
            &copy;&nbsp;<span id="copyright">2026 Duncan</span>&nbsp;-&nbsp;
            <Link to="/contact">Contact</Link>
          </div>
        </footer>
      </Router>
    </DataProvider>
  );
}

export default App;