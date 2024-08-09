import { useState } from 'react'
import './App.css'
import { Artist } from './components/artists/Artist'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { AppRouter } from './components/appRouter/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <AppRouter />
    <Footer />
    </>
  )
}

export default App
