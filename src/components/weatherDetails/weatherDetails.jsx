import { WeatherCard } from './weatherCard'
import { useSelector,useDispatch } from "react-redux";
import actions from "../../redux/actions";
import { useEffect } from "react";

export default function WeatherDetails() {
  // defind needed varaibles.
  const fiveDaysWeather = useSelector(state=>state.fiveDaysWeather.fiveDaysWeather)
  const cityName = useSelector(state=>state.city.cityName)
  const cityCode = useSelector(state=>state.city.cityCode)
  const dispatch =useDispatch();
  // On loading the page - display the weather of the default city's.
  useEffect(()=>{
    dispatch(actions.getCityWeatherFor5Days({cityCode:cityCode}))
  },[])
  // url to icon weather's src.
  const src=`https://www.accuweather.com/images/weathericons/${fiveDaysWeather[0].description}.svg`
  return (
    <>
    {/* display today's weather */}
      <div className="row">
          <div className="text-center col-md-2 offset-md-1">
            <p style={{color:"white",fontSize:"300%"}}>{cityName}</p>
            <p style={{color:"white",fontSize:"150%"}}>today</p>
            <img alt className="weather-icon icon" src={src}
              width="128px" height="128px" data-eager/>
            <p style={{color:"white",fontSize:"200%"}}>{parseInt(fiveDaysWeather[0].temperature)} &#8451;</p>
        </div>
        {/* send to WeatherCard component (for display next days' weather) */}
          {fiveDaysWeather.map((DailyForecast,i)=>{
            if(i==0){return}
            return <WeatherCard day={DailyForecast.day} temperature={parseInt(DailyForecast.temperature)} description={DailyForecast.description}/>
        })}
      </div>
    </>
  );
}