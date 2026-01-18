import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const EditProduct = () => {
    const { products, setProducts } = useData();
    const { id } = useParams(); // Gets the ID from the URL /products/edit/:id
    const navigate = useNavigate();

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    useEffect(() => {
        const product = products.find(p => p.id === parseInt(id));
        if (product) {
            setManufacturer(product.manufacturer);
            setModel(product.model);
            setPrice(product.price);
            setStock(product.numberInStock);
        }
    }, [id, products]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProducts = products.map(p => 
            p.id === parseInt(id) 
            ? { ...p, manufacturer, model, price: parseFloat(price), numberInStock: parseInt(stock) } 
            : p
        );
        setProducts(updatedProducts);
        navigate('/');
    };

    return (
        <div>
            <h1 data-cy="pageTitle">Edit Product</h1>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <form data-cy="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label data-cy="manufacturerLabel">Manufacturer</label>
                            <input data-cy="manufacturerInput" className="form-control" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label data-cy="modelLabel">Model</label>
                            <input data-cy="modelInput" className="form-control" value={model} onChange={(e) => setModel(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label data-cy="priceLabel">Price</label>
                            <input data-cy="priceInput" type="number" step="0.01" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label data-cy="numberInStockLabel">Number In Stock</label>
                            <input data-cy="numberInStockInput" type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
                        </div>
                        <br />
                        <input data-cy="submitButton" type="submit" value="Save" className="btn btn-primary" />
                    </form>
                </div>
            </div>
            <Link to="/">Back to List</Link>
        </div>
    );
};

export default EditProduct;