import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const CreateWatchListItem = () => {
    const { watchList, setWatchList } = useData();
    const navigate = useNavigate();

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: watchList.length > 0 ? Math.max(...watchList.map(w => w.id)) + 1 : 0,
            manufacturer,
            model
        };
        setWatchList([...watchList, newItem]);
        navigate('/watchlist');
    };

    return (
        <div>
            <h1 data-cy="pageTitle">Add to Watch List</h1>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label data-cy="manufacturerLabel">Manufacturer</label>
                            <input data-cy="manufacturerInput" className="form-control" 
                                   value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label data-cy="modelLabel">Model</label>
                            <input data-cy="modelInput" className="form-control" 
                                   value={model} onChange={(e) => setModel(e.target.value)} />
                        </div>
                        <br />
                        <input data-cy="submitButton" type="submit" value="Add" className="btn btn-info" />
                    </form>
                </div>
            </div>
            <Link to="/watchlist">Back to List</Link>
        </div>
    );
};

export default CreateWatchListItem;