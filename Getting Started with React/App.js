const heading = React.createElement("h1",{
  id : "title",
},"Getting Started With React!");
//this  object is used for putting the attributes in html tag.
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
/*Things to Notice 
React Library is used when you have to call methods of original React Library.
ReactDOM is used when we have to do some modifications on DOM(in Browsers)
React Element is nothing but Object.
*/
const heading2 = React.createElement("h2",{
  id : "title",
},"Passing Children inside React!");

const container = React.createElement("div",{
  id : "title",
},[heading,heading2]);//React Children are passed inside Arrays
// Warning: Each child in a list should have a unique "key" prop.
//this will be warning for it
//But this way of creating Element is tedious and not developer friendly
//React come with an idea of writing HTML , CSS inside JavaScript
//So we will see developer friendly code that's why welcome our guest JSX

//passing a react element into our root
//which modifies the DOM using ReactDOM
//root is needed as everything needs a starting point shuruwat kaha se kare
//from here React starts
//there is only one root and single render method in every web app
root.render(container);