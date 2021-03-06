import React from 'react';
import InfoRow from "../InfoRow/InfoRow";
import './InfoPanel.scss';

const InfoPanel = ({dog, info, onClose}) => {
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose()
        }
    };

        return (
            <section className={info ? "info-panel high-resolution" : "info-panel hidden" }>
                <div className="dog-picture" style={{backgroundImage: `url("${dog.picture}")`}}/>
                <div>
                    <h2>{dog.name}, {dog.age}</h2>
                    {dog.features.map((feature, i) => {
                        return (
                            <InfoRow
                                key={i}
                                feature={feature}
                            />
                        )
                    })}
                </div>
                <div className="info-panel__icons">
                   <a content="Send mail to shelter" href="mailto:shrewfallout@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" /></a>
                    <i className="fa fa-times" aria-hidden="true" onClick={handleClose}/>
                </div>
            </section>
        )
};

export default InfoPanel;
