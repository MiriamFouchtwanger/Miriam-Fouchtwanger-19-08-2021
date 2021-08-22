import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import React from "react";
import "./search.css";

// Search city with Autocomplete.
export const Search = () => {
  // defind needed varaibles.
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.matchCities);
  // Select a city and do the Api call.
  const searchCity = (event) => {
    const city = cities.find(
      (c) => c.cityName === event.target.childNodes[0].data
    );
    dispatch(
      actions.setCity({ cityName: city.cityName, cityCode: city.cityCode })
    );
    dispatch(actions.getCityWeatherFor5Days({ cityCode: city.cityCode }));
  };
  // Get the right cities according the search.
  const getMatchCities = (e) => {
    dispatch(actions.getMatchCities(e.target.value));
  };
  return (
    <>
      <div className="col-12 offset-2 col-md-6 offset-md-8">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Autocomplete
          id="country-select-demo"
          style={{ width: 300}}
          options={cities ? cities : ""}
          onChange={(e) => searchCity(e)}
          autoHighlight
          getOptionLabel={(option) => (option.cityName ? option.cityName : "")}
          renderOption={(option) => (
            <React.Fragment>
              {option.cityName ? option.cityName : ""}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search a city"
              style={{
                border: "solid 1px white",
                borderRadius: "4px",
                color: "white",
                
              }}
              color="white"
              // variant="outlined"
              onChange={(e) => getMatchCities(e)}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        />
      </div>
    </>
  );
};