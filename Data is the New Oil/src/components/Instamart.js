import { useState } from "react";

const Section = ({title,description,isVisible,setIsVisible}) => {
  return (
    <div>
      <h3>{title}</h3>
      {/*Toggler*/}
      {isVisible ?
      (<button onClick={()=>setIsVisible(false)}>Hide description</button>) :

      (<button onClick={()=>setIsVisible(true)}>Show description</button>)
       }
      
      {isVisible&&<h3>{description}</h3>}
    </div>
  )
}
const InstaMart = () => {
  const[visibleSection,setIsVisibleSection] = useState();
  return (
    <div>
      <Section title={"About"} description={"This is About Section"}
      isVisible={visibleSection==="about"}
      setIsVisible={()=>setIsVisibleSection("about")}>

      </Section>
      <Section title={"Careers"} description={"This is Careers Section"}
      isVisible={visibleSection==="title"}
      setIsVisible={()=>setIsVisibleSection("title")}>
        
      </Section>
      <Section title={"Grocery"} description={"This is Grocery Section"}
       isVisible={visibleSection==="title"}
       setIsVisible={()=>setIsVisibleSection("title")}>
        
      </Section>
    </div>
  )
};
export default InstaMart; 