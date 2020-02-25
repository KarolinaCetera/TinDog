import React from 'react';
import './Pic.scss';

const Pic = ({dogPicture, info}) => {

    const styles = {
        backgroundImage: `url("${dogPicture}")`
    };

    return (
        <div className= {!info ? "pic__container" : "pic__container invisible"} style={styles} />
    );
};

export default Pic;
