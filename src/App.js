import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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

// Dynamic Footer Sub-component
const DynamicFooter = () => {
    const [showSecret, setShowSecret] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/contact') {
            const timer = setTimeout(() => setShowSecret(true), 2000);
            return () => clearTimeout(timer);
        } else {
            setShowSecret(false);
        }
    }, [location]);

    return (
        <footer className="footer mt-auto py-3 bg-white border-top shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                <span className="text-muted">
                    &copy;&nbsp;<span id="copyright">2026 Duncan Safe App</span>&nbsp;-&nbsp;
                    <Link to="/contact">Contact</Link>
                </span>
                {showSecret && (
                    <span className="badge badge-success p-2 animate__animated animate__fadeIn" data-cy="secretMessage">
                        Duncan Safe Product!
                    </span>
                )}
            </div>
        </footer>
    );
};

function App() {
    return (
        <DataProvider>
            <Router>
                <div className="d-flex flex-column min-vh-100">
                    {/* Fixed Navbar with proper Link visibility */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                        <div className="container">
                            <Link className="navbar-brand d-flex align-items-center" to="/" data-cy="navBrand">
                                <span className="mr-2"></span>
                                <span className="font-weight-bold">DUNCAN SAFE APP</span>
                            </Link>
                            
                            {/* Flex-row ensures links don't collapse into a hamburger menu */}
                            <div className="d-flex flex-row navbar-nav ml-auto">
                                <Link className="nav-item nav-link px-3" to="/" data-cy="navProducts">Product List</Link>
                                <Link className="nav-item nav-link px-3" to="/watchlist" data-cy="navWatchlist">Watch List</Link>
                                <Link className="nav-item nav-link px-3" to="/contact" data-cy="navContact">Contact</Link>
                            </div>
                        </div>
                    </nav>

                    {/* Main Content Area */}
                    <main role="main" className="container">
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

                    <DynamicFooter />
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;