import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import Home from './components/home/Home';
import Contact from './components/home/Contact';
import ProductList from './components/products/ProductList';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from './components/products/EditProduct';
import DeleteProduct from './components/products/DeleteProduct';
import ProductDetails from './components/products/ProductDetails';
import WatchListIndex from './components/watchlist/WatchListIndex';
import CreateWatchListItem from './components/watchlist/CreateWatchListItem';
import EditWatchListItem from './components/watchlist/EditWatchListItem';
import DeleteWatchListItem from './components/watchlist/DeleteWatchListItem';
import WatchListDetails from './components/watchlist/WatchListDetails';

const DynamicFooter = ({ theme, toggleTheme }) => {
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
        <footer className="footer mt-auto py-3 border-top shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                <span className="text-muted">
                    &copy;&nbsp;<span id="copyright">2026 Duncan Safe App</span>&nbsp;-&nbsp;
                    <Link to="/contact">Contact</Link>
                </span>
                
                <div className="d-flex align-items-center">
                    {showSecret && (
                        <span className="badge badge-success p-2 mr-3 animate__animated animate__fadeIn">
                            Duncan Safe Product!
                        </span>
                    )}
                    
                    <button 
                        onClick={toggleTheme} 
                        className={`btn btn-sm ${theme === 'light' ? 'btn-dark' : 'btn-light'}`}
                        data-cy="themeToggle"
                    >
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </div>
            </div>
        </footer>
    );
};

function App() {
    // 1. Set initial state to 'dark'
    const [theme, setTheme] = useState('dark');

    // 2. Ensure the document attribute is set on initial load
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <DataProvider>
            <Router>
                <div className="d-flex flex-column min-vh-100">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                        <div className="container">
                            <Link className="navbar-brand d-flex align-items-center" to="/">
                                <span className="font-weight-bold">DUNCAN SAFE APP</span>
                            </Link>
                            <div className="d-flex flex-row navbar-nav ml-auto">
                                <Link className="nav-item nav-link px-3" to="/">Product List</Link>
                                <Link className="nav-item nav-link px-3" to="/watchlist">Watch List</Link>
                                <Link className="nav-item nav-link px-3" to="/contact">Contact</Link>
                            </div>
                        </div>
                    </nav>

                    <main role="main" className="container">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/welcome" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/products/create" element={<CreateProduct />} />
                            <Route path="/products/edit/:id" element={<EditProduct />} />
                            <Route path="/products/delete/:id" element={<DeleteProduct />} />
                            <Route path="/products/details/:id" element={<ProductDetails />} />
                            <Route path="/watchlist" element={<WatchListIndex />} />
                            <Route path="/watchlist/create" element={<CreateWatchListItem />} />
                            <Route path="/watchlist/edit/:id" element={<EditWatchListItem />} />
                            <Route path="/watchlist/delete/:id" element={<DeleteWatchListItem />} />
                            <Route path="/watchlist/details/:id" element={<WatchListDetails />} />
                        </Routes>
                    </main>

                    <DynamicFooter theme={theme} toggleTheme={toggleTheme} />
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;