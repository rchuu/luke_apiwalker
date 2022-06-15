import React, { useState } from 'react';
import { navigate } from '@reach/router';

function Home() {

    const [resource, setResource] = useState('');
    const [selectId, setSelectId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //search button is a redirect to people/id or planet/id

        navigate('/${resource}/${selectId}');
    }