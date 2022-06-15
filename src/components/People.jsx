import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const People = (props) => {

    const [data, setData] = useState({}); // set the data to an empty object
    const { id } = useParams(); // get the id from the url

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
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
                <h1>People: {data.name} </h1>
                <p>
                    Height: {data.height} <hr></hr>
                    Mass: {data.mass} <hr></hr>
                    Hair Color: {data.hair_color} <hr></hr>
                    Skin Color: {data.skin_color} <hr></hr>
                </p>
            </div>
    );
}

export default People;