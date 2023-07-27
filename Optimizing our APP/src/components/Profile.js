import { useState } from "react";

const Profile = (props) => {
  const {name,xyz} = props;
  const[count1,setCount1] = useState(0);
  const[count2,setCount2] = useState(1);
  return (
  <div>
  <h1>Profile Functional Component</h1>
  <h2>{count1}</h2>
  <h2>{name}</h2>
  <h2>{xyz}</h2>
  <button onClick={()=>count1==0 ? setCount1(1) : setCount1(0)}>Button</button>
  </div>
  );
};
export default Profile;