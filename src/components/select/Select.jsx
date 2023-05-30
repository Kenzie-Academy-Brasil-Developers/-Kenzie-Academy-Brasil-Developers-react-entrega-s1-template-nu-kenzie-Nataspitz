import { StyleSelect } from "./StyleSelect"

export function Select({ onAction }) {

    return(
        <StyleSelect onChange={(e) => onAction(e.target.value)}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
        </StyleSelect>
    )
}