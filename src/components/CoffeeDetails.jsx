import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h2>Coffee Details: {details.name}</h2>
        </div>
    );
};

export default CoffeeDetails;