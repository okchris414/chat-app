import React from 'react';
import './contact.css';


class Contact extends React.Component {
  render() {  
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.nameavatar} alt=""/>
        <div className="status">
          <div className="name">{this.props.name}</div>
          <div className={this.props.status === "online" ? "status-online" : "status-offline"}></div>
          <span className="status-text">{this.props.status}</span>
        </div>
      </div>);
  }
}
export default Contact 