import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Planet = (props) => {

    const [data, setData] = useState({}); // set the data to an empty object
    const { id } = useParams(); // get the id from the url

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
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
                    Terrain: {data.terrain} <hr></hr>
                    Climate: {data.climate} <hr></hr>
                    Surface Water: {data.surface_water} <hr></hr>
                    Population: {data.population} <hr></hr>
                </p>
            </div>
    );
}

export default Planet;