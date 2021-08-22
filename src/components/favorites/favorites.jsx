import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../redux/actions"
import {FavoriteCard} from './favoriteCard'

export const Favorites=()=>{
    // defind needed varaibles.
    const dispatch=useDispatch()
    const favoritesCitiesList=useSelector(state=>state.favorites.favoritesCities)
    const WeathersCitiesFavorites=useSelector(state=>state.favorites.WeathersCitiesFavorites)
    // Get current weather for all favorites cities.  
    useEffect(()=>{
        favoritesCitiesList.map(favoriteCity=>{
            dispatch(actions.getCurrentCityWeather({cityCode:favoriteCity.cityCode,cityName:favoriteCity.cityName}))
        })
    },[])

    return <>
    {/* send to FavoriteCard component (for display favorites citie's weather) */}
        <div className="row container">
            {WeathersCitiesFavorites.map(favorite=>{
                return <FavoriteCard city={favorite.cityName} temperature={favorite.temperature} description={favorite.description}/>
            })}
        </div>
    </>
}