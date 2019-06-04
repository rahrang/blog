import React from 'react';

import iconMap from './iconMap';

const Icon = ({ iconKey }) => (
  <React.Fragment>{iconMap[iconKey]}</React.Fragment>
);

export default Icon;
