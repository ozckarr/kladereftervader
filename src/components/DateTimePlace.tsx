import React, {CSSProperties} from 'react';
import moment from 'moment';
import 'moment/locale/sv';
import Clock from './Clock'
import CitySelection from './CitySelection'


export default function DateTimePlace() {

  //let currentTime = moment().format('LTS');
  let currentDate = moment().format('LL');
  
  return (
    <div style = {timeContainer}>
        <h1>HELLO GBG!</h1>
        <Clock />
      <div style = {timeItem}>
        {currentDate}
      </div> 
     <CitySelection />
    </div>
  );
}

const timeContainer: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const timeItem: CSSProperties = {
  margin: '0 0 2rem 0'
}