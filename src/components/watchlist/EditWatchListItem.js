import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const EditWatchListItem = () => {
    const { watchList, setWatchList } = useData();
    const { id } = useParams();
    const navigate = useNavigate();

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    useEffect(() => {
        const item = watchList.find(w => w.id === parseInt(id));
        if (item) {
            setManufacturer(item.manufacturer);
            setModel(item.model);
        }
    }, [id, watchList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedWatchList = watchList.map(item => 
            item.id === parseInt(id) 
            ? { ...item, manufacturer, model } 
            : item
        );
        setWatchList(updatedWatchList);
        navigate('/watchlist');
    };

    return (
        <div>
            <h1 data-cy="pageTitle">Edit Watch List Item</h1>
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
                        <input data-cy="submitButton" type="submit" value="Save" className="btn btn-primary" />
                    </form>
                </div>
            </div>
            <Link to="/watchlist">Back to List</Link>
        </div>
    );
};

export default EditWatchListItem;