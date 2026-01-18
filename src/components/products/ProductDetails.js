import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const ProductDetails = () => {
    const { products } = useData();
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h1 data-cy="pageTitle">Product Detail</h1>
            <hr />
            <dl className="row">
                <dt className="col-sm-2">Manufacturer</dt>
                <dd className="col-sm-10">{product.manufacturer}</dd>
                <dt className="col-sm-2">Model</dt>
                <dd className="col-sm-10">{product.model}</dd>
                <dt className="col-sm-2">Price</dt>
                <dd className="col-sm-10">{product.price.toFixed(2)}</dd>
                <dt className="col-sm-2">In Stock</dt>
                <dd className="col-sm-10">{product.numberInStock}</dd>
            </dl>
            <Link to={`/products/edit/${product.id}`} className="btn btn-warning">Edit</Link> | <Link to="/">Back to List</Link>
        </div>
    );
};

export default ProductDetails;