import React from 'react';
import './ListElement.scss';

const ListElement = ({dog, onShowInfo, showInfo, onDeleteDog}) => {

    const handleDogInfo = () => {
        if (typeof onShowInfo === 'function') {
            onShowInfo();
        }
    };

    const handleDeleteDog = () => {
        if (typeof onDeleteDog === 'function') {
            onDeleteDog();
        }
    };

    return (
        <li className= {showInfo ? "dogs-list__element invisible" : "dogs-list__element"} >
            <span className="dogs__name">{dog.name}</span>
            <div className="dogs__icons">
                <a content="Send mail to shelter" href="mailto:shrewfallout@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" /></a>
                <i className="fa fa-info" aria-hidden="true" onClick={handleDogInfo} />
                <i className="fa fa-times" aria-hidden="true" onClick={handleDeleteDog}/>
            </div>
        </li>
    );
};

export default ListElement;
