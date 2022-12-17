import React, { useLayoutEffect, useRef , useState} from 'react'

export const Quote = ({value, created_at}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [value])

  return (
    <>
   <blockquote style={{display:"flex", /*flexDirection:'column'*/}} className="blockquote text-end">
        <footer className="blockquote-footer">{!!value && value}</footer>
        <p ref= {pRef} className="mb-1">{created_at?.substring(0, 10)}</p>
    </blockquote>
    <code>{ JSON.stringify(boxSize) }</code>
  </>
  )
}
