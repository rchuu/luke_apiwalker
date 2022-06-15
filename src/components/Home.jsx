import React, { useState } from 'react';
import { useHistory } from '@reach-router';

const Form = (props) => {

    const [type, setType] = useState('');
    const [id, setId] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push(`/search/${type}/${id}`);
    }

    return (
        <form onSubmit={search}>
            <label>Search for</label>
            <select
                onChange={e => setType(e.target.value)} value={type}>
                <option>People</option>
                <option>Planets</option>
            </select>
            <label> id: </label>
            <input type='number' min={1} onChange={e => setId(e.target.value)} value={id} />
            <input type='submit' value='Search' />
        </form>
    )
};

