import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText,restaurants){
  const filterData = restaurants.filter((restaurant)=>
  restaurant?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  ||
  restaurant?.data?.data?.cuisines?.includes(searchText));
  return filterData;
}
const Body = () => {
  const[restaurants,setRestaurants] = useState(restaurantList);
  const [searchText,setSearchText] = useState();
  return (
  <>
  <div className="search-container">
    <input 
      type="text"
      className="search-input"
      placeholder="Search"
      value={searchText}
      onChange={(e)=>{
        setSearchText(e.target.value);
      }}>
      </input>
      <button 
      className="search-btn"
      onClick={()=>{
        const data = filterData(searchText,restaurants);
        setRestaurants(data);
      }}
      >
      <i class="fas fa-search"></i>
      </button>
  </div>
  <div className="restaurant-list">
  { restaurants.map((restaurant) => {
   return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
  })}
  </div>
  </>
  );
};
export default Body;