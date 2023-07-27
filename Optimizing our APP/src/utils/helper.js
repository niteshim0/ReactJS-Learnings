export function filterData(searchText,restaurants){
  if(searchText==undefined||searchText?.length==0) return restaurants;
  const filterData = restaurants.filter((restaurant)=>
  restaurant?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  ||
  restaurant?.data?.data?.cuisines?.includes(searchText));
  return filterData;
};