import React from 'react';
import './Pic.scss';

const Pic = ({dogPicture}) => {


    const styles = {
        backgroundImage: `url("${dogPicture}")`
    };

    return (
        <div className="pic__container" style={styles} />
    );
};

export default Pic;
