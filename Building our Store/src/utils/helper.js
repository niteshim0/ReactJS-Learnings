export function filterData(searchText, restaurants) {
  const filteredRestaurant = restaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurant;
}