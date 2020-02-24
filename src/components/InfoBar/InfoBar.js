import React from 'react';
import './InfoBar.scss';

const InfoBar = ({dogName, dogAge}) => {

    return (
        <div className="infobar">
            <span className="infobar__info">{dogName}, {dogAge} yrs</span>
        </div>
    );
};

export default InfoBar;
