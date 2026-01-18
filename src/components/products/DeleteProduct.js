import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const DeleteProduct = () => {
    const { products, setProducts } = useData();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    const handleDelete = () => {
        setProducts(products.filter(p => p.id !== parseInt(id)));
        navigate('/');
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h1 data-cy="pageTitle">Delete From Product List</h1>
            <h3>Are you sure you want to delete this?</h3>
            <hr />
            <dl className="row">
                <dt className="col-sm-2">Manufacturer</dt>
                <dd className="col-sm-10">{product.manufacturer}</dd>
                <dt className="col-sm-2">Model</dt>
                <dd className="col-sm-10">{product.model}</dd>
            </dl>
            <button data-cy="deleteButton" onClick={handleDelete} className="btn btn-danger">Confirm Delete</button>
            &nbsp;|&nbsp;
            <Link to="/">Back to List</Link>
        </div>
    );
};

export default DeleteProduct;