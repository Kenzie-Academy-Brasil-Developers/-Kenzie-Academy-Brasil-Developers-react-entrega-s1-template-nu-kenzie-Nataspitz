import { Card } from "../card/Card";
import { StyleList } from "./StyleList";


export function List({ transitionList, setTransitionList, totalValue, setTotalValue }) {

    function removeTransition(transitionId) {
        setTransitionList((transitionList)=>
           transitionList.filter(transition =>transition.id !== transitionId )
        )
        
        const sub = transitionList.reduce((accValue, list) =>{
         const result =  accValue + Number(list.value)
         return result 
     },0)

     if (transitionList.transition ==="entrada") {
        setTotalValue(totalValue - sub)
     }else setTotalValue(totalValue + sub)
        
    }



    return(
        <>
        {
            transitionList.length > 0 
                ?   <StyleList>
                    {transitionList.map(transition =>{
                    return <Card key={transition.id} transition={transition} removeTransition={removeTransition} />
                    })}
                    </StyleList> 
                :   <h3 id="titleDefault">Você ainda não possui nenhum lançamento</h3>
         }
       </> 
    )
}