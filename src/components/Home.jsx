import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Home = (props) => {

    const [type, setType] = useState('people'); // set the type to people
    const [id, setId] = useState(1); // set the id to 1
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push(`/${type}/${id}`); // push to the search page
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

export default Home