
import { useState } from "react"

interface User {
    uid : string 
    name : string

}

export function Usuario() {

    const [user, setUser] = useState<User>()

    const login =()=>{
        setUser({
            uid :"SARAZA",
            name: "Miguel Andres "
        })
    }

    return (
        <div className="mt-5">
            <h2>Usuarios : UseState</h2>

            <button className="btn btn-outline-primary" onClick={()=>login()}>
                login 
            </button>

            <pre>{ user? JSON.stringify(user) :<h1>No hay usuario</h1>  }</pre>
        </div>
    )
}
