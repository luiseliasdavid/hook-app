import {useRef} from 'react'

export const FocusScreen = () => {

    const  inputRef = useRef()


const onClick = ()=>{
   inputRef.current.hidden==='true'
   console.log(inputRef.current)
}
  return (
    <>
      <div>FocusScreen</div>
      <hr />
      <input
        ref= {inputRef}
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
        
      />
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  )
}
