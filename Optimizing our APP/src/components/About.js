import React from "react";
import ProfileClass from "./Profileclass";
import Profile from "./Profile";

const About = () => {
  return (
    <>
    <h1>Nitesh Kushwaha</h1>
    <p>A passionate Frontend Web Developer</p>
    <Profile name ="NiteshFunction" xyz = "xyzfn"/>
    <ProfileClass name ="NiteshClass" xyz = "xyzclass"/>
    </>
  );
};
export default About;