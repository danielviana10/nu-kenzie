import { useState } from 'react'
import { AccoutingCreateForm } from './components/AccountingCreateForm'
import { AccoutingList } from './components/AccountingList'
import { AccoutingNumbers } from './components/AccountingNumbers'
import { Header } from './components/Header'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [accoutingList, setAccoutingList] = useState([])

  const accoutingValor = accoutingList.reduce((previousValue, acc) => {
    return previousValue + Number(acc.money)
  }, 0)

  const addAccoutingToAccoutingList = (formData) => {
    const newAccouting = {...formData, id: uuidv4()}
    const newAccoutingList = [...accoutingList, newAccouting]
    setAccoutingList(newAccoutingList)
  }

  const removeAccoutingFromAccoutingList = (accId) => {
    const newAccoutingList = accoutingList.filter(acc => acc.id !== accId)
    setAccoutingList(newAccoutingList)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <AccoutingCreateForm addAccoutingToAccoutingList={addAccoutingToAccoutingList}  />
          <AccoutingNumbers accoutingValor={accoutingValor}/>
        </section>
        <section>
          <h2>Resumo financeiro</h2>
          <AccoutingList accoutingList={accoutingList} removeAccoutingFromAccoutingList={removeAccoutingFromAccoutingList} />
        </section>
      </main>
    </div>
  )
}

export default App
