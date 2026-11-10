import { API_URL } from "../utils/constants";

const getRestaurants = async () => {
    let res = await fetch(API_URL);
    if(!res.ok) {
        throw new Error("Failed to fetch restaurants");
    }

    let data = await res.json();
    return data;
}

export default getRestaurants;