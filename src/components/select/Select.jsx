
export function Select({ onAction }) {

    return(
        <select required onChange={onAction}>
            <option value=""  >Selecione o tipo</option>
            <option value="entrada" >Entrada</option>
            <option value="saida">Saída</option>
        </select>
    )
}