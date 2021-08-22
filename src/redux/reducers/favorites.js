import produce from 'immer'
import createReducer from '../reducerUtils'

const initiolState={
    favoritesCities:[],
    WeathersCitiesFavorites:[]     
}

const favoritesFunctions={
    setCitiesFavorites(state,action){
        state.favoritesCities=[...state.favoritesCities,{cityCode:action.payload.code,cityName:action.payload.name}]
        console.log(state.favoritesCities);
    },
    setWeathersCitiesFavorites(state,action){
        state.WeathersCitiesFavorites=[...state.WeathersCitiesFavorites,action.payload]
        console.log('WeathersCitiesFavorites',state.WeathersCitiesFavorites);
        console.log('WeathersCitiesFavorites` length',state.WeathersCitiesFavorites);
    },
}

const reducer=produce((state,action)=>{
    createReducer(state,action,favoritesFunctions)
},initiolState)

export default reducer