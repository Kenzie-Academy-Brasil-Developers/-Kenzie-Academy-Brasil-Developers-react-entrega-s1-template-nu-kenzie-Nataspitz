import { useState } from 'react'
import { GlobalStyles } from './style/global'
import { Container } from './components/container/Container'
import { Form } from './components/form/Form'
import logo from "./assets/logo.png"
import { Total } from './components/total/Total'
import { List } from './components/list/List'




function App() {
  const [transitionList, setTransitionList] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  console.log(totalValue);
  function sumValue(newValue, list) {
   
    const sum = list.reduce((accTransition, transition) => {
      let value = Number(transition.value)
      const transitionType = transition.transition
      
      transitionType.toLowerCase() === "entrada" 
      ? value = value
      : value = value * -1

      const result =  accTransition +value;
      return result 
    },0)
    
    list.length > 0
    ? setTotalValue(sum + newValue)
    : setTotalValue(newValue )
  }  


  return (
    <>
      <GlobalStyles />
        <header>
          <Container>
            <img src={logo} alt="Logo da Nu Kenzie" />
          </Container>
        </header>
        <main>
          <Container>
            <section id='left'>
              <Form setTransitionList={setTransitionList} transitionList={transitionList}  sumValue={sumValue}/>
              <Total  transitionList={transitionList}  totalValue={totalValue} />
            </section>
            <section id='right'>
              <h3>Resumo financeiro</h3>
              <List transitionList={transitionList}  setTransitionList={setTransitionList}/>
            </section>
          </Container>
        </main>
    </>
  )
}

export default App
