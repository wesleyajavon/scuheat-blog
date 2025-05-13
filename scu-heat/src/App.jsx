import Profil from './components/Profil'
import players from '../players.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <Profil key={index} {...player} />
          ))}
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App
