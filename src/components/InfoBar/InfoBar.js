import React from 'react';
import './InfoBar.scss';

const InfoBar = ({dog, info, dogs}) => {

    const dogsLength = dogs.length;

    if (dogsLength > 0 ){
        return (
            <div className={!info ? "infobar" : "infobar invisible"}>
                <span className="infobar__info">{dog.name}, {dog.age} yrs dupa</span>
            </div>
        )
    } else {
        return null;
    }

};

export default InfoBar;
