import { useState } from 'react'
import './App.css'
import { Artist } from './components/artists/Artist'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { AppRouter } from './components/appRouter/AppRouter'
import { SlideShow } from './components/slideShow/SlideShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <SlideShow />
    <AppRouter />
    <Footer />
    </>
  )
}

export default App
