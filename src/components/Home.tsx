import React, {CSSProperties} from 'react';
import DateTimeContainer from './DateTimeContainer'
import WeatherTemp from './WeatherTemp';

interface Props{
  isDayMode: boolean,
  loadWeather: object
}


export default function Home(props : Props) {
  return (
    <div style = {homeGridItem}>
      <DateTimeContainer />
      <WeatherTemp isDayMode={props.isDayMode} loadWeather={props.loadWeather}/>  
    </div>
  );
}

const homeGridItem: CSSProperties = {
  gridArea: 'home',
  height: '95vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
