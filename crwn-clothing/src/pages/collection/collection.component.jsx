import React from 'react';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionID);

  return (
    <div className='collection'>
      <h2>COLLECTION PAGE: {match.params.collectionID}</h2>
    </div>
  );
};

export default CollectionPage;
