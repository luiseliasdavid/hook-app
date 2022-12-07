import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

   const {counter,increment,decrement,reset} = useCounter()


  return (
    <>
    <h1>Counter With Custom Hook: {counter} </h1>
    <hr/>
    <button onClick={()=>increment(2)} className="btn btn-success btn-lg">+1</button>
    <button onClick={()=>decrement(2)} className="btn btn-warning btn-lg">-1</button>
    <button onClick={reset} className="btn btn-danger btn-lg">restet</button>
    </>
  )
}

