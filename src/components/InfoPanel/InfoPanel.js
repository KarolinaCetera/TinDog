import React from 'react';
import InfoRow from "../InfoRow/InfoRow";
import './InfoPanel.scss';

const InfoPanel = ({dog, info, onClose, dogs}) => {
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose()
        }
    };

    const dogsLength = dogs.length;

    if (dogsLength > 0 ){
        return (
            <section className={info ? "info-panel" : "info-panel hidden" }>
                <h2>{dog.name}, {dog.age}</h2>
                {dog.features.map((feature, i) => {
                    return (
                        <InfoRow
                            key={i}
                            feature={feature}
                        />
                    )
                })}
                <div className="info-panel__icons">
                    <i className="fa fa-phone" aria-hidden="true"/>
                    <i className="fa fa-times" aria-hidden="true" onClick={handleClose}/>
                </div>
            </section>
        )
    } else {
        return null;
    }




};

export default InfoPanel;
