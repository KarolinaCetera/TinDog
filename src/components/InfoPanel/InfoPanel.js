import React from 'react';
import InfoRow from "../InfoRow/InfoRow";

const InfoPanel = ({dogFeatures}) => {
    return (
        <section className="info-panel">
            {dogFeatures.map((feature, i) => {
                return (
                    <InfoRow
                        key={i}
                        feature={feature}
                    />)
            })}
        </section>
    );
};

export default InfoPanel;
