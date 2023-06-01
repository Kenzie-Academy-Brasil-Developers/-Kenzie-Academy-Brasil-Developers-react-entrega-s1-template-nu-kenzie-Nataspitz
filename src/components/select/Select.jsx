
export function Select({ onAction }) {

    return(
        <select onChange={(e) => onAction(e.target.value)}>
            <option defaultValue=""  >Selecione o tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
        </select>
    )
}