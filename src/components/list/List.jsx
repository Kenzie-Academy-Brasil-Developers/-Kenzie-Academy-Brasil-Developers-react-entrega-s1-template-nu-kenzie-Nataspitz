import { Card } from "../card/Card";
import { StyleList } from "./StyleList";


export function List({ transitionList, setTransitionList, totalValue, setTotalValue }) {

    function removeTransition(transitionId) {
        setTransitionList((transitionList)=>
           transitionList.filter(transition =>transition.id !== transitionId )
           )
           console.log(totalValue, "valor total remove");
        
        const sub = transitionList.reduce((accValue, list) =>{
            const value =  Number(list.value)
            const typeTransition = list.transition
            console.log(accValue);
            
            if (typeTransition.toLowerCase() === "entrada") {
                console.log("entrada");
            }else console.log("saida");

            //const result =  accValue + Number(list.value)

         return result 
     },0)

     
     if (transitionList.transition ==="entrada") {
         console.log(sub - totalValue);
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