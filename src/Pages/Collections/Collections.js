import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EachCollection from '../EachCollection/EachCollection';
import EachCollectionWithVariant from '../EachCollection/EachCollectionWithVariant';
import './Collections.css';

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const url = 'collections.json';
    axios.get(url)
    .then(res => {
      const { data } = res;
      setCollections(data);
    })
  }, []);

  return (
    <div className='collections'>
      <div className="each-collection">
        {
          collections.map(collection => (
            <EachCollectionWithVariant
              key={collection.id}
              eachCollection={collection}
            />
          ))
        }
      </div>
      <div id='btn'>
        <button>
          view all
        </button>
      </div>
    </div>
  );
};

export default Collections;