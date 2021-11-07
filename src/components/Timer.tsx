
import { useEffect, useRef, useState } from "react"

type TimerProps ={
    milisegundos : number
    segundos? : number
}

export const Timer = ({milisegundos}: TimerProps) => {

    const [segundos, setSegundos] = useState(0)
   const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
       ref.current && clearInterval(ref.current)
     ref.current =  setInterval(()=>setSegundos(s=>s+1),milisegundos)
      
    }, [milisegundos])
    

    return (
        <>
           <h2>timer :<small> {segundos} </small></h2>
        </>
    )
}
