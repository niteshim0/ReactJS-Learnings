import React from "react";
class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count1 : 0,
      count2 : 1,
    };
  }
  render(){
    const {count1} = this.state;
    return (
      <div>
      <h1>Profile Class Based Component</h1>
      <h2>{count1}</h2>
      <h2>{this.props.name}</h2>
      <h2>{this.props.xyz}</h2>
      <button onClick={()=> this.setState({
        count1 : count1==0 ? 1 : 0,
      }) }>Button</button>
      </div>
      );
  };
};
export default Profile;