import React from 'react';
import './Pic.scss';

const Pic = ({dog, info, dogsLength}) => {

    if (dogsLength === 0) {
        return <p className="no-dogs">There are no more dogs in your neighbourhood!</p>
    } else {
        return <div className= {!info ? "pic__container" : "pic__container invisible"} style={{backgroundImage: `url("${dog.picture}")`}} />
    }
};

export default Pic;



