import { useState } from "react"
import { StyleForm } from "./StyleForm"
import { Button } from "../button/Button.jsx";
import { Select } from "../select/Select";
import { v4 as uuidv4 } from "uuid";


export function Form({ setTransitionList }) {

    const [form, setForm] = useState({
        message: "",
        value: "",
        transition: "",
        
    })

    function addTransition() { 
        setTransitionList((transitionList) => [...transitionList, {...form,  id: uuidv4()}])
    }

   
    

    function submit(e) {
       e.preventDefault()
       addTransition()
       
        setForm((oldForm) =>{
            return {...oldForm,
                message: "",
                value: "",
        
            }
        })
    }

    return(
        <StyleForm onSubmit={submit}>
            <label>Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição"  value={form.message} required onChange={(e) => setForm({...form, message: e.target.value})}/>
            <span>Ex: compra de roupas</span>
            <label>Valor (R$)</label>
            <input type="number" placeholder="Digite aqui o valor" value={form.value}  required onChange={(e) => setForm({...form, value: e.target.value})}/>
            <label>Tipo de valor</label>
            <Select onAction={(e) =>  
                setForm({...form, transition: e.target.value})}/>
            <Button>Inserir valor</Button>
        </StyleForm>
    )
}