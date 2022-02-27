import React from 'react';

import { Images } from '../../constants';

export const SubHeading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }}>
        <p className="p__cormorant">{title}</p>
        <img src={Images.spoon} alt="spoon_image" className="spoon__img" />
    </div>
);
