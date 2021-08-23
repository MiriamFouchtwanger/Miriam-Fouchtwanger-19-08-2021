import actions from '../actions'
const apiKey="?apikey=CTJGxnrzpQxrMCHp1tvUNSAXE3YMCArb"
const baseUrl="https://dataservice.accuweather.com/forecasts/v1/daily"
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getCurrentCityWeather=({dispatch,getState})=>next=>action=>{
    if(action.type === 'GET_CURRENT_CITY_WEATHER')
    {
        fetch(`${baseUrl}/1day/${action.payload.cityCode}${apiKey}`,
        {
            method:'GET',
        })
        .then(res=>res.json())
        .then(result=>{
            const weather={temperature:parseInt((result.DailyForecasts[0].Temperature.Maximum.Value-32)*5/9), description:result.DailyForecasts[0].Day.Icon}
            return weather
        })
        .then(result=>dispatch(actions.setWeathersCitiesFavorites({cityName:action.payload.cityName,...result})))
        .catch(err=>console.log(err))
    }
    return next(action)
}


export const getCityWeatherFor5Days=({dispatch,getState})=>next=>action=>{
    if(action.type === 'GET_CITY_WEATHER_FOR5_DAYS')
    {
        fetch(`${baseUrl}/5day/${action.payload.cityCode}${apiKey}`,
        {
            method:'GET',
        })
        .then(res=>res.json())
        .then(result=>{
            const arr=[]
            result.DailyForecasts.map((DailyForecast)=>{
                const date = new Date(DailyForecast.Date);
                arr.push({day:days[date.getDay()],temperature:(DailyForecast.Temperature.Maximum.Value-32)*5/9,description:DailyForecast.Day.Icon})
            })
            console.log(arr);
            return arr   
        })
        .then(arr=>dispatch(actions.setFiveDaysWeather(arr)))
        .catch(err=>alert("There is a problem calling the server, Please try again later."))
    }
    return next(action)
}
