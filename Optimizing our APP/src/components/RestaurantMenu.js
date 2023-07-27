import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams(); 
  const restaurant = useRestaurant(resId);
  return !restaurant ? (
    <></>
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-details">
    <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}/>
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <h2 className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</h2>
          <h2 className="avg-rating">{restaurant?.avgRating}</h2>
          <h2>{restaurant?.costForTwoMessage}</h2>
        </div>
      <div className="restaurant-menu items">
      <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
        //Menu items
  );
};

export default RestaurantMenu;