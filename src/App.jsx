import { useState } from 'react'
import { GlobalStyles } from './style/global'
import { Container } from './components/container/Container'
import { Form } from './components/form/Form'
import logo from "./assets/logo.png"
import { Total } from './components/total/Total'
import { List } from './components/list/List'




function App() {
  const [transitionList, setTransitionList] = useState([])

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
              <Form setTransitionList={setTransitionList}   />
              <Total  transitionList={transitionList}   />
            </section>
            <section id='right'>
              <h3>Resumo financeiro</h3>
              <List transitionList={transitionList}  setTransitionList={setTransitionList}  />
            </section>
          </Container>
        </main>
    </>
  )
}

export default App
