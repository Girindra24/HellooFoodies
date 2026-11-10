import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./MainContent.css";
// import data from "../../utils/mockData";
import { useState, useEffect } from "react";
import getRestaurants from "../../services/getRestaurants";
import {
  TOP_RATED,
  FAST_DELIVERY,
  COST_EFFECTIVE,
  FILTER_LABEL,
} from "../../utils/constants";

const MainContent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getRestaurants();
        const restaurants =
          response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleTopRatedFilter = () => {
    const topRatedRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.0,
    );
    setFilteredRestaurants(topRatedRestaurants);
  };

  const handleFastDeliveryFilter = () => {
    const fastDeliveryRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.sla?.deliveryTime < 30,
    );
    setFilteredRestaurants(fastDeliveryRestaurants);
  };

  const handleCostEffectiveFilter = () => {
    const costEffectiveRestaurants = listOfRestaurants.filter((res) => {
      let cost = res?.info?.costForTwo || [];
      const amount = Number(cost?.replace(/\D/g, ""));
      return amount < 300;
    });
    setFilteredRestaurants(costEffectiveRestaurants);
  };

  if (isLoading) return <h2>Loading restaurants...</h2>;

  if (error) return <p>Error: {error}</p>;
  return (
    <div className="main-content">
      <div className="filter-btns">
        <span>{FILTER_LABEL}</span>
        <button className="filter-btn" onClick={handleTopRatedFilter}>
          {TOP_RATED}
        </button>
        <button className="filter-btn" onClick={handleFastDeliveryFilter}>
          {FAST_DELIVERY}
        </button>
        <button className="filter-btn" onClick={handleCostEffectiveFilter}>
          {COST_EFFECTIVE}
        </button>
      </div>
      <div className="res-card-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default MainContent;
