import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element
const title = (
  <a href="/">
  <img
  className="logo"
  alt="logo" 
  src="https://cdn.dribbble.com/userupload/3948352/file/original-23058bebfe8c5bfb9f6dbd90b83dd6dd.jpg?compress=1&resize=1504x1128">
  </img>
  </a>
);
//React Functional Component
const Header = () => (
  <div className="header">
    {title}
    <div className="nav-items">
      <ul>
       <li><a href="/">Home</a></li>
       <li><a href="/">About Us</a></li>
       <li><a href="/">Contact Us</a></li>
       <li><a href="/">Cart</a></li>
       <li><a href="/">Login</a></li>
      </ul>
    </div>
  </div>
);
const burgerKing = {
    name:"Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cuisines:["Burgers","American"],
    rating:"4.2",
};
const restaurantList = [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "710541",
        "name": "Desi Swaad",
        "uuid": "f88f76a0-70a1-446e-bd85-833fad6039fb",
        "city": "117",
        "area": "Nanda Nagar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "924ad2de4296f1c213c16f49dfcdfb13",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Fast Food",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "desi-swaad-golghar-golghar",
          "city": "gorakhpur"
        },
        "cityState": "117",
        "address": "Jeetpur darghiya nandanagar, Darghiya, Nanda Nagar, Gorakhpur, Uttar Pradesh 273008, India",
        "locality": "Darghiya",
        "parentId": 71254,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "UPTO ₹45",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "710541",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "584893",
        "name": "Marky Momos",
        "uuid": "6bed4ff7-6ad6-4b45-9a10-31c6abe3acdb",
        "city": "117",
        "area": "Golghar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "vsjpqu2cmzp2hhriwbts",
        "cuisines": [
          "Chinese",
          "Snacks",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "marky-momos-kuraghat-kuraghat",
          "city": "gorakhpur"
        },
        "cityState": "117",
        "address": "K01, FOURTH FLOOR, MOHADDIPUR, ORION  MALL, GORAKHPUR, Zone No-1, Gorakhpur,  Uttar Pradesh-273008",
        "locality": "Orion mall",
        "parentId": 4659,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "584893",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "115336",
        "name": "Grilled Chilli",
        "uuid": "944e770f-9e92-4d3b-874f-2296cf700baa",
        "city": "117",
        "area": "Mohaddipur",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "vni1szofb6ungwmhdfe9",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Italian",
          "Desserts",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "the-yellow-chilli-azad-nagar-medical_road",
          "city": "gorakhpur"
        },
        "cityState": "117",
        "address": "Ayodhoya Prasad Apartments  1st Floor  Mohaddipur",
        "locality": "Mohaddipur",
        "parentId": 378828,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "115336",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "586554",
        "name": "Momo Magic Cafe",
        "uuid": "5eb3afe4-57b7-4792-bdcb-703f1fbc3d12",
        "city": "117",
        "area": "Kawwa Bagh Colony",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "tb6qkf2awdvgrqddopem",
        "cuisines": [
          "Chinese",
          "Snacks",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "momo-magic-cafe-golghar-golghar-2",
          "city": "gorakhpur"
        },
        "cityState": "117",
        "address": "NEAR ORION MALL, MOHADDIPUR, POSTKUNRAGHAT, PS-CANT, Mohaddipur, Zone  No-1, Gorakhpur, Uttar Pradesh - 273008",
        "locality": "Kasya Road",
        "parentId": 138188,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "586554",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
];
const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId
}) => {
   return (
   <div className="card">
    <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
    <h2>{name}</h2>
    <h3>{cuisines.join(",")}</h3>
    <h4>{lastMileTravelString} minutes</h4>
   </div>
);
};
const Body = () => (
     <div className="restaurant-list">
     { restaurantList.map((restaurant) => {
      return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
     })}
     </div>
);
const Footer = () => (
  <div>
     <h4>Footer</h4>
     <p>It will contain the important links and copyright</p>
     </div>
);
const AppLayout = () => (
   <>
   <></>
   <Header/>
   <Body/>
   <Footer/>
   </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
