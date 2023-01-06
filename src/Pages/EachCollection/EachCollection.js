import React from 'react';

const EachCollection = ({ eachCollection }) => {
  const { id, img, price, title, variant } = eachCollection;
  console.log(eachCollection);

  // let i;

  return (
    <div>
      {
        !variant ?
        <div>
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p><strong>Tk {price}</strong></p>
        </div>
        :(
          
        <div>
          <img src={variant[0].img} alt={variant[0].title} />
          <h3>{variant[0].title}</h3>
          <p><strong>Tk {variant[0].price}</strong></p>
          <div id='variant'>
            <img src={variant[0].color_variation_1} alt="" />
            <img src={variant[0].color_variation_2} alt="" />
            <img src={variant[0].color_variation_3} alt="" />
            <img src={variant[0].color_variation_4} alt="" />
          </div>
        </div>
        )
      }
    </div>
  );
};

export default EachCollection;