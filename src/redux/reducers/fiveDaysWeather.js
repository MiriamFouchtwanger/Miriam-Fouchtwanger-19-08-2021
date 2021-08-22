import produce from 'immer'
import createReducer from '../reducerUtils'

const initiolState={
    fiveDaysWeather:[{day:"",temperature:"",description:""}],
}

const fiveDaysWeatherFunctions={
    setFiveDaysWeather(state,action){
        state.fiveDaysWeather=action.payload
    },
}

const reducer=produce((state,action)=>{
    createReducer(state,action,fiveDaysWeatherFunctions)
},initiolState)

export default reducer