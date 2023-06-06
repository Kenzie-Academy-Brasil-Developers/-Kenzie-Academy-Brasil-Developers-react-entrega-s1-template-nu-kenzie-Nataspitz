import { Card } from "../card/Card";
import { StyleList } from "./StyleList";


export function List({ transitionList, setTransitionList }) {

    function removeTransition(transitionId) {
        setTransitionList((transitionList)=>
           transitionList.filter(transition =>transition.id !== transitionId )
           )
        
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