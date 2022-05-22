import React from "react";
import "./styles.css";

const lads = [
  { id: "1", name: "Benny Wood", age: 24 },
  { id: "2", name: "Nial Carr", age: 24 },
  { id: "3", name: "Aitana Hermana", age: 22 },
  { id: "4", name: "Lisa M Gasper", age: 22 }
];

const Lads = (props) => {
  const { name, age, id } = props;
  return (
    <div key={id}>
      Name : {name} and Age: {age}
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Hola Amigos</h1>
      {lads.map((ls) => {
        return <Lads {...ls} key={ls.id} />;
      })}
    </div>
  );
}
