import React from 'react';
import DogForm from "../Form/DogForm";
import './AddDog.scss';

const AddDog = () => {
    return (
        <div className="form-container">
            <h2>Looking for home for a dog? Let us know!</h2>
            <DogForm/>
        </div>
    );
};

export default AddDog;
