import { useState } from 'react'
import { GlobalStyles } from './style/global'
import { Container } from './components/container/Container'
import { Form } from './components/form/Form'
import logo from "./assets/logo.png"
import { Total } from './components/total/Total'




function App() {
  const [count, setCount] = useState(0)

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
            <section>
              <Form/>
              <Total />
            </section>
            <section>
              <h3>Resumo financeiro</h3>
            </section>

          </Container>
          </main>
    </>
  )
}

export default App
