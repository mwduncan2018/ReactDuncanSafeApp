import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { products, watchList } = useData();
    const [isFuzzyEnabled, setIsFuzzyEnabled] = useState(false);

    const checkMatch = (product) => {
        // Exact Match logic (Highlighter lightgreen)
        const isMatch = watchList.some(w => 
            w.manufacturer.toLowerCase() === product.manufacturer.toLowerCase() && 
            w.model.toLowerCase() === product.model.toLowerCase()
        );

        if (isMatch) return "highlight-row-match";

        // Fuzzy Match logic (Highlighter lightpink)
        if (isFuzzyEnabled) {
            const isFuzzy = watchList.some(w => 
                w.manufacturer.toLowerCase() === product.manufacturer.toLowerCase() || 
                w.model.toLowerCase() === product.model.toLowerCase()
            );
            if (isFuzzy) return "highlight-row-fuzzy";
        }

        return "";
    };

    return (
        <div>
            <h1 data-cy="pageTitle">Product List</h1>

            <p>
                <Link data-cy="addNewProductButton" className="btn btn-info float-right" to="/products/create">
                    Add New Product
                </Link>
                <button 
                    data-cy="fuzzyfuzzy" 
                    id="fuzzFuzz" 
                    className={`btn ${isFuzzyEnabled ? 'btn-danger' : 'btn-warning'} float-right mr-2`}
                    onClick={() => setIsFuzzyEnabled(!isFuzzyEnabled)}
                >
                    {isFuzzyEnabled ? "Disable Fuzzy Matching!" : "Enable Fuzzy Matching!"}
                </button>
            </p>
            <br /><span>&nbsp;</span>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Watch List?</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th>Actions</th>
                        {isFuzzyEnabled && <th>Fuzzy?</th>}
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => {
                        const rowClass = checkMatch(item);
                        const isOnWatchList = watchList.some(w => 
                            w.manufacturer === item.manufacturer && w.model === item.model
                        );

                        return (
                            <tr key={item.id} className={rowClass}>
                                <td>{isOnWatchList ? "True" : "False"}</td>
                                <td>{item.manufacturer}</td>
                                <td>{item.model}</td>
                                <td>{item.price.toFixed(2)}</td>
                                <td>{item.numberInStock}</td>
                                <td>
                                    <Link to={`/products/edit/${item.id}`}>Edit</Link> |&nbsp;
                                    <Link to={`/products/details/${item.id}`}>Details</Link> |&nbsp;
                                    <Link to={`/products/delete/${item.id}`}>Delete</Link>
                                </td>
                                {isFuzzyEnabled && <td>{rowClass === "highlight-row-fuzzy" ? "True" : "False"}</td>}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;