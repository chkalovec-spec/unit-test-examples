import { List } from '../List'
import { Search } from '../Search'
import './App.css'

import { data } from '../../mockData/db'

function App() {
  return (
    <div className='App'>
      <Search />
      <List items={data} />
    </div>
  )
}

export default App
