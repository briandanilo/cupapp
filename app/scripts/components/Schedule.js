import React from 'react'
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from '../containers/all.js'

class Schedule extends React.Component {

  constructor (props) {
    super(props);
  }

  renderSchedule(){
    var events = ["Friday: Cup","Saturday: Cup","Sunday: Cup"]
    return events.map((i)=>{
      return <p>{i}</p>
    })
  }

  render () {
    return (<div>
      <h3>Schedule of Events!</h3>
      {this.renderSchedule()}
    </div>)
  }
}

export default connect(container.allState)(Schedule)
