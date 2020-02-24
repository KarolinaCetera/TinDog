import React from 'react';

const InfoRow = ({feature}) => {
    return (
        <div className="info-row">
            <h3>{feature.type}</h3>
            <p>{feature.value}</p>
        </div>
    );
};

export default InfoRow;
