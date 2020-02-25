import React from 'react';
import './InfoBar.scss';

const InfoBar = ({dogName, dogAge, info}) => {

    return (
        <div className={!info ? "infobar" : "infobar invisible"}>
            <span className="infobar__info">{dogName}, {dogAge} yrs</span>
        </div>
    );
};

export default InfoBar;
