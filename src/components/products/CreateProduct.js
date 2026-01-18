import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const CreateProduct = () => {
    const { products, setProducts } = useData();
    const navigate = useNavigate();

    // Local state for the form fields
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!manufacturer || !model || !price || !stock) {
            setError("All fields are required.");
            return;
        }

        // Create the new product object
        const newProduct = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 0,
            manufacturer,
            model,
            price: parseFloat(price),
            numberInStock: parseInt(stock)
        };

        // Update the global data store
        setProducts([...products, newProduct]);

        // Redirect back to the Product List (Index)
        navigate('/');
    };

    return (
        <div>
            <h1 data-cy="pageTitle">Add Product</h1>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <form data-cy="form" onSubmit={handleSubmit}>
                        {error && <div className="text-danger">{error}</div>}
                        
                        <div className="form-group">
                            <label data-cy="manufacturerLabel" className="control-label">Manufacturer</label>
                            <input 
                                data-cy="manufacturerInput" 
                                className="form-control" 
                                value={manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label data-cy="modelLabel" className="control-label">Model</label>
                            <input 
                                data-cy="modelInput" 
                                className="form-control" 
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label data-cy="priceLabel" className="control-label">Price</label>
                            <input 
                                data-cy="priceInput" 
                                type="number"
                                step="0.01"
                                className="form-control" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label data-cy="numberInStockLabel" className="control-label">Number In Stock</label>
                            <input 
                                data-cy="numberInStockInput" 
                                type="number"
                                className="form-control" 
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>

                        <br />
                        <div className="form-group">
                            <input data-cy="submitButton" type="submit" value="Add" className="btn btn-info" />
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <Link to="/">Back to List</Link>
            </div>
        </div>
    );
};

export default CreateProduct;