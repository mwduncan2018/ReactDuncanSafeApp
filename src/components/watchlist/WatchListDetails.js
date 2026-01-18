import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const WatchListDetails = () => {
    const { watchList } = useData();
    const { id } = useParams();
    
    // Find the specific watch list item by the ID in the URL
    const item = watchList.find(w => w.id === parseInt(id));

    if (!item) return <div className="container">Watch List item not found.</div>;

    return (
        <div>
            <h1 data-cy="pageTitle">Watch List Detail</h1>
            <div>
                <hr />
                <dl className="row">
                    <dt className="col-sm-2">
                        Manufacturer
                    </dt>
                    <dd className="col-sm-10">
                        {item.manufacturer}
                    </dd>
                    <dt className="col-sm-2">
                        Model
                    </dt>
                    <dd className="col-sm-10">
                        {item.model}
                    </dd>
                </dl>
            </div>
            <div>
                <Link to={`/watchlist/edit/${item.id}`} className="btn btn-warning">Edit</Link> |&nbsp;
                <Link to="/watchlist">Back to List</Link>
            </div>
        </div>
    );
};

export default WatchListDetails;