import { useState } from "react"
import { StyleForm } from "./StyleForm"
import { Button } from "../button/Button.jsx";
import { Select } from "../select/Select";
import { v4 as uuidv4 } from "uuid";


export function Form({ setTransitionList, transitionList, sumValue }) {
    const [form, setForm] = useState({
        message: "",
        value: "",
        transition: "",
        
    })


    function addTransition() {
        setTransitionList([...transitionList, {...form,  id: uuidv4()}])
        const valueNumber = form.transition === "entrada"
        ? Number(form.value) 
        : Number(form.value) * -1
    
        sumValue(valueNumber, transitionList)
  
    }
   
   
    

    function submit(e) {
       e.preventDefault()
       addTransition()
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
            <span>Ex: compra de roupas</span>
            <label>Valor (R$)</label>
            <input type="number" placeholder="Digite aqui o valor" value={form.value}  required onChange={(e) => setForm({...form, value: e.target.value})}/>
            <label>Tipo de valor</label>
            <Select onAction={eventSelect}/>
            <Button sumValue={sumValue}>Inserir valor</Button>
        </StyleForm>
    )
}