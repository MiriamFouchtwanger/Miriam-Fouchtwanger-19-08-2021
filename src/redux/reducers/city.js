import produce from 'immer'
import createReducer from '../reducerUtils'
const apiKey="?apikey=GibikUWyxLFwd5eDuWKoIJeByjPcWeiQ";

const initiolState={
    cityCode:215854,    
    cityName:"Tel-Aviv" ,  
    matchCities:[]
}

const currentWeatherFunctions={
    setCity(state,action){
        state.cityCode=action.payload.cityCode
        state.cityName=action.payload.cityName
    },
    setMatchCities(state,action){
        state.matchCities=action.payload
    },
}

const reducer=produce((state,action)=>{
    createReducer(state,action,currentWeatherFunctions)
},initiolState)

export default reducer