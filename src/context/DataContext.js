import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // Initial Products from your DataStore.cs
    const [products, setProducts] = useState([
        { id: 0, manufacturer: "Outback", model: "Coconut Shrimp", price: 15.0, numberInStock: 3 },
        { id: 1, manufacturer: "Outback", model: "Steak", price: 22.0, numberInStock: 21 },
        { id: 2, manufacturer: "Five Guys", model: "Hamburger", price: 10.0, numberInStock: 1 },
        { id: 3, manufacturer: "McDonald's", model: "Chicken McGriddle", price: 3.0, numberInStock: 25 },
        { id: 4, manufacturer: "Wendy's", model: "Bacon Double Stack", price: 3.0, numberInStock: 2 },
        { id: 5, manufacturer: "Wawa", model: "Coffee", price: 2.12, numberInStock: 3 },
    ]);

    const [watchList, setWatchList] = useState([
        { id: 0, manufacturer: "Five Guys", model: "Hamburger" },
        { id: 1, manufacturer: "Apple", model: "MacBook" },
        { id: 2, manufacturer: "Outback", model: "Bloomin Onion" },
    ]);

    return (
        <DataContext.Provider value={{ products, setProducts, watchList, setWatchList }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);