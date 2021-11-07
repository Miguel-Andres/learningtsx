import { ChangeEvent, useState } from "react";


export const useForm =< T extends Object >(initState : T)=>{

    const [formulario,setFormulario] = useState(initState)

    const handleChange =(event : ChangeEvent<HTMLInputElement>)=>{

        const {name , value} = event.target

        setFormulario({
            ...formulario,
            [name]:value
        })
    }
    // tenermos que regresar si o si 
    return{
        formulario,
        handleChange,
        // destructurin para poder llamar a la propiedades directamente desde usehook en el componente que se importen
       ...formulario
    }
}
