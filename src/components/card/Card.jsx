import { Button } from "../button/Button";
import { StyleCard } from "./StyleCard";

export function Card({ transition, removeTransition }) {
    let value = Number(transition.value)
    return(
        <StyleCard>
            <h3>{transition.message}</h3>
            <p>{transition.transition}</p>
            <span>{`R$ ${value.toFixed(2)}`}</span>
            <button onClick={() => removeTransition(transition.id)}>Excluir</button>
        </StyleCard>
    )
}