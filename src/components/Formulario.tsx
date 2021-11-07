
import { useForm } from "../hooks/useForm"

interface FormData {
    name:string,
    email:string,
    edad: number
}

export const Formulario = () => {

  const {formulario,handleChange}= useForm<FormData>({
      name:"",
      email:"",
      edad:0
  })

  

    return (
        <form autoComplete="off">
            <div>
                <label >Email</label>
                <input type="email" name="email" onChange={handleChange}
                />
            </div>
            <div>
                <label >Nombre</label>
                <input type="text" name="nombre"  onChange={handleChange}/>
            </div>
            <div>
                <label >edad</label>
                <input type="number" name="edad"  onChange={handleChange}/>
            </div>
            


            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
