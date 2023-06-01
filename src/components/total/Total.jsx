import { useState } from "react";
import { StyleTotal } from "./StyleTotal";

export function Total({ transitionList, totalValue }) {

    return(
        <StyleTotal>
            <div>
                <h3>Valor Total:</h3>     
                <span>{`R$ ${totalValue.toFixed(2)}`}</span>
            </div>
            <p>O valor referido ao seu saldo</p>
        </StyleTotal>
    )
}