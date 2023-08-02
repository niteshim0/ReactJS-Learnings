import React from 'react'
import { IMG_CDN_URL } from '../constants';

const FoodCard = ({name,description,imageId
  ,price}) => {
  return (
    <div>
      <img src = {IMG_CDN_URL+imageId
}></img>
    <h2>{name}</h2>
    <h3>{description}</h3>
    <h4>{price/100} </h4>
    </div>
  )
};

export default FoodCard