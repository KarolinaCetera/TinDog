import React from 'react';
import './FavPanel.scss';

const FavPanel = ({info, onInfo, onAdd, onNext}) => {

    const handleInfo = () => {
        if (typeof onInfo === 'function') {
            onInfo()
        }
    };

    const handleNextDog = () => {
        if (typeof onNext === 'function' ){
            onNext();
        }
    };

    const handleAddDog = () => {
        if (typeof onAdd === 'function') {
            onAdd()
        }
    };

    return (
        <div className={!info ? "fav-panel" : "fav-panel invisible"}>
            <i className="fa fa-times" aria-hidden="true" onClick={handleNextDog}/>
            <i className="fa fa-info" aria-hidden="true" onClick={handleInfo}/>
            <i className="fa fa-heart" aria-hidden="true" onClick={handleAddDog}/>
        </div>
    );
};

export default FavPanel;
