import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/homepage/players/Players'

const fetchPlayers = async()=>{
  const res = await fetch('players.json')
  return res.json()
}
function App() {
const playersPromise = fetchPlayers()
  return (
    <section>
    <header>
      <Navbar></Navbar>
    </header>

    <main>
      <Banner></Banner>
      <Suspense>
      <Players 
      playersPromise ={playersPromise}
      ></Players>
      </Suspense>
    </main>
    <footer>
    <Footer></Footer>
    </footer>
    </section>
  )
}

export default App
