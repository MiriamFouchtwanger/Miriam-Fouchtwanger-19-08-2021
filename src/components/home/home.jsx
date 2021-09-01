import './home.css'
import { Search } from "../search/search";
import  WeatherDetails  from "../weatherDetails/weatherDetails";
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';


export const Home = () => {
  // defind needed varaibles.
  const dispatch=useDispatch()
  const cityCode=useSelector(state=>state.city.cityCode)
  const cityName=useSelector(state=>state.city.cityName)

  // function- add selected city to the favorites cities.
  const addToTheFavorites=()=>{
    dispatch(actions.setCitiesFavorites({code:cityCode,name:cityName}))
  }
  return (
    <>
    {/* Search a city */}
    <Search/>
    {/* button- add selected city to favorites cities */}
    <div className="row">
      <button type="button" className="btn-circle offset-1" onClick={addToTheFavorites}>
        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="35" height="35" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </button>
      <p>Add to favourites</p>
    </div>
    <div className="row">
    {/* Weather details of the selected city */}
    <WeatherDetails/> 
    </div>
    </>
  );
};

/*
the plan:
create a landing page put on it the header, footer, and the components
home page:
- responsive design
- create an auto complete (you can use 'react material ui' (install)): 
- create a 'weather details' component that will display the current city weather details. (will get the selected city name and weather)
favorites:
- for saving the favorites cities you should use cookies
- in the favorites page you will render a list of card components
- create a card component that will get details for favorite city and will display them in a nice way.
2 api calls:
1. get cities for the auto complete
2. get current weather for the selected city              |    
3. get weather for the next 5 days for the selected city  |
*/
