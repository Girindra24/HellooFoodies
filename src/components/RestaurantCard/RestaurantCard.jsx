import "./RestaurantCard.css";
import { RES_IMG_URL } from "../../utils/constants";

const RestaurantCard = ({resData}) => {
    const {name, cloudinaryImageId, cuisines, avgRatingString, deliveryTime} = resData.card.card.info;
    return (
        <div className="res-card">
        <img className="res-logo" src={RES_IMG_URL + cloudinaryImageId} alt="res-logo" />
            <h4>{name}</h4>
            <h5>{cuisines.join(",")}</h5>
            <h5> {avgRatingString} stars </h5>
            <h5> {deliveryTime} </h5>
        </div>
    )
}

export default RestaurantCard;