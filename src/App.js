import React from "react";
import "./styles.css";

const lads = [
  { name: "Benny Wood", age: 24 },
  { name: "Nial Carr", age: 24 },
  { name: "Aitana Hermana", age: 22 },
  { name: "Lisa M Gasper", age: 22 }
];

const Lads = (props) => {
  const { name, age } = props;
  return (
    <div>
      Name : {name} and Age: {age}
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Hola Amigos</h1>
      {lads.map((ls) => {
        return <Lads {...ls} />;
      })}
    </div>
  );
}
