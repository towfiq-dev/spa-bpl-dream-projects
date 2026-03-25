import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/homepage/players/Players'

const 
function App() {

  return (
    <section>
    <header>
      <Navbar></Navbar>
    </header>

    <main>
      <Banner></Banner>
      <Suspense>
      <Players></Players>
      </Suspense>
    </main>
    <footer>
    <Footer></Footer>
    </footer>
    </section>
  )
}

export default App
