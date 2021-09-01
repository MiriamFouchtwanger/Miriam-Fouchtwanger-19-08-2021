import actions from "../actions";
const apiKey="?apikey=E5ueo4cVsRsAeAQUGzMbyimcJOkLYJya";

export const getMatchCities =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === "GET_MATCH_CITIES") {
      fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete${apiKey}&q=${action.payload}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          return result.map(city=>{
         return {cityName:city.LocalizedName,cityCode:city.Key}
        })
        })
        .then(res=>dispatch(actions.setMatchCities(res)))
        .catch((err) => alert("There is a problem calling the server, Please try again later."));
    }
    return next(action);
  };
