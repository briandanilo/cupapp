import React from 'react'
import { connect } from "react-redux";
import container from '../containers/all.js'
import callGoogleApi from '../actions/googleApi.js'
import TransferForm from './TransferForm.js'

class Transfer extends React.Component {

  constructor (props) {
    super(props);
    this.launchForm = this.launchForm.bind(this)
  }

  launchForm(e){
    console.log("form!",e)
  }

  displayCuppers(){
    if (this.props.cuppers)
      return this.props.cuppers.map((i)=>{
        let n = ""+i+" list-group-item"
        return <a href="#" prop="bd" onClick={this.launchForm} className={n}>{i[0]}</a>
      })
  }

  render () {
    if (!this.props.cuppers)
      this.props.dispatch(callGoogleApi("cuppers"))
    return (
      <main>
        <h3>Send Chips To</h3>
        <TransferForm />
        <div className="list-group">
          {this.displayCuppers()}
        </div>
      </main>
    );
  }
}
export default connect(container.allState)(Transfer)
