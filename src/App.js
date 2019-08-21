import React, { Component } from 'react';
import { Link } from 'react-router-dom'
/*------- connect redux with redux --------*/
import { connect } from 'react-redux';
/*------- action which returns all messages from data base --------*/
import { getMessages } from './actions'


class App extends Component {

  componentWillMount(){
    /*------- action call from our actions :getMessages() which render all messages from database --------*/
    this.props.dispatch(getMessages())
  }
    /*------- renderList() : this function returns template of all messages comes from database  --------*/

  renderList = ({list}) => {
    if(list){
      return list.map((item)=>{
        return(
          <div key={item.id} className="item-list">
              <div className="title">{item.title}</div>
              <div className="sender">Message from:<span>{item.from}</span></div>
              <div className="body">{item.message}</div>
          </div>
        )
      })
    }
  }

  render() {
    return (
        <div className="App">
          <div className="top">
            <h3>Messages</h3>
            <Link to="/form">Add</Link>
          </div>
          <div className="messages_container">
            {this.renderList(this.props.messages)}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    /*------- it returns messages when action is called and state going to change  --------*/
  return {
      messages:state.messages
  }
}

    /*------- connection between react and redux --------*/

export default connect(mapStateToProps)(App)