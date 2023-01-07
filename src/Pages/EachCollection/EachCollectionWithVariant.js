import React, { useState } from 'react';

const EachCollectionWithVariant = ({ eachCollection }) => {
  const [product, setProduct] = useState(eachCollection);
  const [productVariant, setProductVariant] = useState(() => {
    let { variant, ...rest } = product;
    return [rest].concat(product.variant);
  });

  return (
    <div>
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p><strong>Tk {product.price}</strong></p>
      {
        product.color_variation ?
          <div id='variant'>
            {
              productVariant.map((item, key) => {
                return <img
                  key={key}
                  src={item.color_variation}
                  alt=""
                  className={item.id === product.id ? 'active' : ''}
                  style={{ 'cursor': 'pointer' }}
                  onClick={() => setProduct(item)}
                />
              })
            }
          </div> : ''
      }

    </div>
  );
};

export default EachCollectionWithVariant;