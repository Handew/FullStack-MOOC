import React from "react";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  // -- Vaihtoehtoinen tapa määrittää funktio --
  // const bornYear = () => {
  //   return new Date().getFullYear() - age
  // }

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <p>greeting app created by <a href="https://github.com/handew">Handew</a></p> 
    </div>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Footer />
    </>
  );
};

export default App;
