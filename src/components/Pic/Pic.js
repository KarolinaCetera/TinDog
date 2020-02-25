import React from 'react';
import './Pic.scss';

const Pic = ({dog, info, dogs}) => {
    const dogsLength = dogs.length;

    if (dogsLength > 0 ){
        return <div className= {!info ? "pic__container" : "pic__container invisible"} style={{backgroundImage: `url("${dog.picture}")`}} />
    } else {
       return <p className="no-dogs">There are no more dogs in your neighbourhood!</p>
    }
};

export default Pic;
