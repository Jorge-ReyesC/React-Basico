import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Pots";
// import { func } from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value + "...");
};
const users = [
  {
    id: 1,
    name: "ryan ray",
    Image: "https://robohash.org/User2",
  },
  {
    id: 2,
    name: "ryan ray2",
    Image: "https://robohash.org/User3",
  },
  {
    id: 3,
    name: "ryan ray3",
    Image: "https://robohash.org/User4",
  }
];

function Counter(){
  const [counter , setCounter] = useState(0)
  const [mensaje, setMensaje] = useState('')

  useEffect(()=>{
    console.log('render')
  },[counter])
  
  return(
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter + 1)
      }}>
        Incremetar
      </button>
      <button onClick={()=>{
        setCounter(counter - 1)
      }}>
        Restar
      </button>
      <button onClick={()=>{
        setCounter(100)
      }}>
        Reiniciar
      </button>
      
      <div>
        <input onChange={e=>setMensaje(e.target.value)} />
        <button onClick={()=>{
          alert('el Mensaje es : ' + mensaje)
        }} >
          Save
        </button>
        <hr/>

      </div>
    </div>
  )
}

root.render(
  <>
    <TaskCard ready={true} />

    <Posts />
    <br />
    <Counter/>
    

    <br/>

    {users.map((user, i) => {
      // return <h1 key={i}>{user.name}</h1>;
      return (
        <div>
          <h1 key={i}>{user.name}</h1>
          <img src={user.Image}></img>
        </div>
      );
    })}

    <Saludar />
    <Button text="Saludar" />
    {/* <input id="hola" onChange={function(e){
      console.log(e.target.value + '...')
      // console.log("Escribiendo en el input")
    }} /> */}

    {/* <input id="hola" onChange={handleChange} /> */}

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(console.log("Enviado"));
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Send</button>
    </form>

    <Button text="click me" />
    <Button text="Pay" />
    <Button text="" name="Joe" />

    <Greeting title="Hola" />
    <Greeting title="bye" />
    <Greeting />
    <UserCard
      name="ryan ray"
      amount={3000}
      married={true}
      points={[[99, 33.3, 22.2]]}
      address={{ street: "123 main streer", city: "new york" }}
      greet={function () {
        alert("hello");
      }}
    />
    <Product />
    <UserCard
      name="Joe Mcmillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ street: "av some 123", city: "New York" }}
    ></UserCard>
  </>
);
