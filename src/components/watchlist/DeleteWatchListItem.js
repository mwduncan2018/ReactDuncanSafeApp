import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const DeleteWatchListItem = () => {
    const { watchList, setWatchList } = useData();
    const { id } = useParams();
    const navigate = useNavigate();
    
    const item = watchList.find(w => w.id === parseInt(id));

    const handleDelete = () => {
        setWatchList(watchList.filter(w => w.id !== parseInt(id)));
        navigate('/watchlist');
    };

    if (!item) return <div>Item not found</div>;

    return (
        <div>
            <h1 data-cy="pageTitle">Delete from Watch List</h1>
            <h3>Are you sure you want to delete this from the watch list?</h3>
            <hr />
            <dl className="row">
                <dt className="col-sm-2">Manufacturer</dt>
                <dd className="col-sm-10">{item.manufacturer}</dd>
                <dt className="col-sm-2">Model</dt>
                <dd className="col-sm-10">{item.model}</dd>
            </dl>

            <button data-cy="deleteButton" onClick={handleDelete} className="btn btn-danger">Confirm Delete</button>
            &nbsp;|&nbsp;
            <Link to="/watchlist">Back to List</Link>
        </div>
    );
};

export default DeleteWatchListItem;