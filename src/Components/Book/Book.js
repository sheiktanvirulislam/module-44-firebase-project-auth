import React from 'react';
import { useParams } from 'react-router';

const Book = () => {
    const{bedType} = useParams();
    return (
        <div>
            <h1>{bedType}</h1>
        </div>
    );
};

export default Book;