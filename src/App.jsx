import { Suspense, useState } from 'react'
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
const [coin, setCoin] = useState(50000000)
  return (
    <section>
    <header>
      <Navbar coin={coin}></Navbar>
    </header>

    <main>
      <Banner></Banner>
      
      <Suspense>
      <Players 
      playersPromise ={playersPromise}
      setCoin={setCoin}
      coin = {coin}
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
