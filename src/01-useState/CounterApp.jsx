import { useState } from "react"

//ejercicio que sirve para ver como se actualizan los valores de los estados
//en este caso se actualizan los valores de los contadores
//se hace uso de un solo estado para los 3 contadores
//Se utilizan los spread operator para no perder los valores anteriores

export const CounterApp = () => {
    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    }); 

 const {counter1,counter2, counter3} = state;


  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>

        <hr />

        <button className="btn btn-primary" onClick={ () => setCounter({
            ...state,
            counter1: counter1 + 1
        })}>+1</button>
    </>
  )
}
