import React, { Component } from 'react';

import './App.css';
import Clock from './Clock';

class App extends Component {

   state = {
    secondVal: 0,
    minuteVal: 0,
    hourVal: 0
  }
  
 componentDidMount () {
   setInterval(() => {
     this.setClock()
   }, 1000);
 }

   setClock = () =>{
      const currentDate = new Date;
       let secondVal = currentDate.getSeconds() / 60;
       let minuteVal = (secondVal + currentDate.getMinutes()) / 60;
       let hourVal = (minuteVal + currentDate.getHours()) / 12;
       this.setState({secondVal: secondVal = currentDate.getSeconds() / 60}) 
       this.setState({minuteVal: minuteVal = (secondVal + currentDate.getMinutes()) / 60}) 
       this.setState({hourVal:hourVal = (minuteVal + currentDate.getHours()) / 12});
   }    
  
  render(){
    const {secondVal, minuteVal, hourVal} = this.state
    return (
      <Clock secondVal={secondVal} minuteVal={minuteVal} hourVal={hourVal}/>
    );
  }
}

export default App;