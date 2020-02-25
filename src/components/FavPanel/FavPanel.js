import React from 'react';
import './FavPanel.scss';

const FavPanel = ({info, onInfo}) => {

    const handleInfo = () => {
        if (typeof onInfo === 'function') {
            onInfo()
        }
    };

    return (
        <div className={!info ? "fav-panel" : "fav-panel invisible"}>
            <i className="fa fa-times" aria-hidden="true"/>
            <i className="fa fa-info" aria-hidden="true" onClick={handleInfo}/>
            <i className="fa fa-heart" aria-hidden="true"/>
        </div>
    );
};

export default FavPanel;
