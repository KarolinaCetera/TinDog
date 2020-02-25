import React from 'react';
import './InfoRow.scss';

const InfoRow = ({feature}) => {
    return (
        <div className="info-row">
            <h3>{feature.type}: {feature.value}</h3>
        </div>
    );
};

export default InfoRow;
