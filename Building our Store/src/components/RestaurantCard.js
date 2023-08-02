import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({
  name,
  cuisines,
  locality,
  cloudinaryImageId,
  avgRating,
}) => {
  const {user} = useContext(UserContext);
   return (
   <div className="card">
    <img src = {IMG_CDN_URL+cloudinaryImageId}></img>
    <h2>{name}</h2>
    <h3>{cuisines.join(",")}</h3>
    <h4>{locality} </h4>
    <i className="fa-solid fa-star"></i>
    <span>{avgRating}</span>
    <h3>{user.name}</h3>
   </div>
);
};
export default RestaurantCard;