
import { StyleTotal } from "./StyleTotal";

export function Total({  transitionList }) {

    const totalValue = transitionList.reduce((accValue, transition) =>{
        if (transition.transition === "entrada") {
            return accValue + Number(transition.value)
        }else {
            return accValue - Number(transition.value)
        }   
    },0)

    return(
        <>
            {
                totalValue != 0 ?(
                <StyleTotal>
            
                    <div>
                        <h3>Valor Total:</h3>     
                        <span>{`R$ ${totalValue.toFixed(2)}`}</span>
                    </div>
                    <p>O valor referido ao seu saldo</p>
                </StyleTotal>
                ) : null
            }
        </>

    )
}