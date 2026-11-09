import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./MainContent.css";
import data from "../../utils/mockData";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="res-card-container">
        {data.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)}
      </div>
    </div>
  );
};
export default MainContent;
