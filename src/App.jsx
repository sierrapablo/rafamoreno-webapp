import './App.css'
import { ArtistGallery } from './components/ArtistGallery'
import { MainFrame } from './components/MainFrame'
import { Replayer } from './components/Replayer'

function App() {

  return (
    <>
    <body>
      <header></header>
      <MainFrame/>
      <Replayer/>
      <ArtistGallery/>
      <footer></footer>
    </body>
    </>
  )
}

export default App
