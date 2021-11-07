import { useState } from "react"


export const Counter = () => {

    const [Counter, setCounter] = useState(0)

    const increment =(numero :number =1):void=>{
        setCounter(Counter + numero)
    }

    return (
        <div className="mt-5">
            <h3>Counter : Usetate</h3>


            <span>Valor :  {Counter}</span>
            <br/>
            <button className="btn btn-outline-primary mt-2" onClick={()=>increment()}> +1</button> 
            <button className="btn btn-outline-primary mt-2" onClick={()=>increment(2)}> +2</button> 
            <button className="btn btn-outline-primary mt-2" onClick={()=>setCounter(0)}> reset</button> 
        </div>
    )
}
