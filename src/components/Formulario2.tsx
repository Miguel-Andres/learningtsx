import { useForm } from '../hooks/useForm';

interface FormData{
    phone :number ,
    city : string 
}


export const Formulario2 = () => {

    const {city,formulario,handleChange}=useForm<FormData>({
        phone: 0 ,
        city : "Barranquilla"
    })

    return (
        <form autoComplete="off">
            <div>
                <label >phone</label>
                <input type="number" name="phone" onChange={handleChange}
                />
            </div>
            <div>
                <label >city</label>
                <input type="text" name="city" value={city} onChange={handleChange}/>
            </div>
          
            


            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
