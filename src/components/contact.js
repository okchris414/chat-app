import React from 'react';
import './contact.css';


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      online: props.status === 'online',
    };
  }

  handleStatusClick = () => {
    const online = this.state.online;
    this.setState({ online: !online });
  }

  render() {  
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.nameavatar} alt=""/>
        <div className="status" onClick={this.handleStatusClick}>
          <div className="name">{this.props.name}</div>
          <div className={this.state.online ? "status-online" : "status-offline"}></div>
          <span className="status-text">{this.state.online ? "online" : "offline"}</span>
        </div>
      </div>);
  }
}
export default Contact 