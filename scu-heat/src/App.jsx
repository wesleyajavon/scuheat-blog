import './App.css'
import Profil from './components/Profil'
import players from '../players.js'
import Header from './components/Header.jsx'

function App() {



  const playersElements = players.map((player) => 
    <Profil 
      key={player.id}
      {...player}
        />
  )

  return(
    <>
        <Header/>
        <main className='container'>
          {playersElements}
        </main>

    </>

  )
}

export default App
