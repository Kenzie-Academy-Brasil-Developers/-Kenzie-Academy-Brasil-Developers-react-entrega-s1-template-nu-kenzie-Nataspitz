import { useState } from "react"
import { StyleForm } from "./StyleForm"
import { Button } from "../button/Button.jsx";
import { Select } from "../select/Select";



export function Form() {
    const [form, setForm] = useState({
        message: "",
        value: "",
        transition: ""
    })
   

    function submit(e) {
       e.preventDefault()
       console.log(form);
        setForm({
            message: "",
            value: "",
            transition: ""
        })
    }

    function eventSelect(value) {
        setForm({...form, transition: value})
    }

    return(
        <StyleForm onSubmit={submit}>
            <label>Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição"  value={form.message} required onChange={(e) => setForm({...form, message: e.target.value})}/>
            <label>Valor (R$)</label>
            <input type="number" placeholder="Digite aqui o valor" value={form.value}  required onChange={(e) => setForm({...form, value: e.target.value})}/>
            <Select onAction={eventSelect}/>
            <Button>Inserir valor</Button>
        </StyleForm>
    )
}