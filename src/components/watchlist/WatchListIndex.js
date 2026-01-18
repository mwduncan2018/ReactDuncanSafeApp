import React from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';

const WatchListIndex = () => {
    const { watchList } = useData();

    return (
        <div>
            <h1 data-cy="pageTitle">The Watch List</h1>
            <p>
                <Link data-cy="addToWatchListButton" className="btn btn-info float-right" to="/watchlist/create">
                    Add To Watch List
                </Link>
            </p>
            <br /><span>&nbsp;</span>
            <table className="table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.map(item => (
                        <tr key={item.id}>
                            <td>{item.manufacturer}</td>
                            <td>{item.model}</td>
                            <td>
                                <Link to={`/watchlist/edit/${item.id}`}>Edit</Link> |&nbsp;
                                <Link to={`/watchlist/delete/${item.id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WatchListIndex;