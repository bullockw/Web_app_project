import React, { Component } from 'react';
import './App.css';
import './sumcal.css'

class SumCal extends Component {

  sumCalEaten(state) {
    var calEaten = 0;
    for(var i = 0; i < state.log.length; i++)
    { calEaten += parseInt(state.log[i].calorie);
    }
    return calEaten
  }

  sumBurned(state) {
    var burnedsum = 0;
    for(var i = 0; i < state.exercise.length; i++)
    { burnedsum += parseInt(state.exercise[i].calburned);
    }
    return burnedsum
  }

  sumCalorie(state) {
    var cals = 0;
    var sumburned = 0;
    for(var i = 0; i < state.log.length; i++)
    { cals += parseInt(state.log[i].calorie);
    }
    for(var i = 0; i < state.exercise.length; i++)
    { sumburned += parseInt(state.exercise[i].calburned);
    }
    return cals - sumburned
  }

  render() {
    const entries = this.props.state;
    var toteaten = this.sumCalEaten(entries);
    var totcals = this.sumCalorie(entries);
    var totburned =this.sumBurned(entries);

    //console.log(this.refs.createFood.value,this.refs.createCalorie.value,this.refs.createDate.value);
    //this.props.changeFood("di");;
    return(
      <div className="sumBox">Total Eaten&nbsp;: {toteaten}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Total Burned &nbsp;: {totburned}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Net Calories:&nbsp;{totcals}
      </div>
    );
    }
}

export default SumCal;
