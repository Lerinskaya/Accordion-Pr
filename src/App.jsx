import './App.css'
import Accordion from './components/Accordion'
import TableHead from './components/TableHead'

function App() {
  return (
    <div className='container'>
      <h1 className='heading'>Задачи</h1>
      <div className='table'>
        <TableHead/>
        <div>
          <Accordion/>
        </div>
      </div>
    </div>
  )
}

export default App
