import './App.css'
import Profil from './components/Profil'
import players from '../players.js'

function App() {

  const playersElements = players.map((players) => {
    return <Profil 
      key={players.id}
      {...players}
        />
  })

  return(
    <>
        <main className='container'>
          {playersElements}
        </main>

    </>

  )
}

export default App
