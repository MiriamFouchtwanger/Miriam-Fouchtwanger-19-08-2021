import {applyMiddleware, combineReducers, createStore } from 'redux'
import city from './reducers/city'
import favorites from './reducers/favorites'
import fiveDaysWeather from './reducers/fiveDaysWeather'
import {getMatchCities} from './middleware/cityCRUD'
import {getCurrentCityWeather} from './middleware/weatherCRUD'
import { getCityWeatherFor5Days } from './middleware/weatherCRUD'

const reducer = combineReducers({city,fiveDaysWeather,favorites});
const store=createStore(reducer,applyMiddleware(getCityWeatherFor5Days,getCurrentCityWeather,getMatchCities))
window.store=store
export default store