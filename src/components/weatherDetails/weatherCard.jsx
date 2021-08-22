import {Card} from 'react-bootstrap';

export const WeatherCard=(props)=>{
  // defind needed varaibles.
  const { day, temperature, description}=props
  // url to icon weather's src.
  const src=`https://www.accuweather.com/images/weathericons/${description}.svg`
  return (
    <>
    {/* display a day's weather according the sent details by props */}
    <Card  style={{backgroundColor:"rgba(255, 255, 255, 0.466)",width:"15%",height:"100%"}} className="text-center">
        <Card.Body><br></br>
          <h4 style={{color:"white"}}>{day}</h4><br></br>
          <img alt className="weather-icon icon" src={src}
          width="128px" height="128px" data-eager/>
          <br></br><br></br>
          <h3 style={{color:"white"}}>{temperature} &#8451;</h3><br></br>
        </Card.Body>
      </Card>
    </>
  );
}