import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Planet = (props) => {

    const [data, setData] = useState({}); // set the data to an empty object
    const { id } = useParams(); // get the id from the url

    useEffect(() => {
        axios.get(`https://swapi.co/api/planets/${id}`)
            .then(res => {
                console.log(res);
                setData(res.data); // set the data to the response data
            })
            .catch(err => {
                console.error(err);
                setData({ error: 'get the f out' })
            })
    }, [id]); // run the useEffect only once when the id changes

    return (
        data.error ?
            <h1>{data.error}</h1> :
            <div>
                <h1>Planet: {data.name} </h1>
                <p>
                    Terrain: {data.terrain}
                    Climate: {data.climate}
                    Surface Water: {data.surface_water ? 'true' : 'false'}
                    Population: {data.population}
                </p>
            </div>
    );
}

export default Planet;