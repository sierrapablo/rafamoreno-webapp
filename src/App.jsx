import './App.css'
import { ArtistGallery } from './components/ArtistGallery'
import { ContactForm, ContactInfo } from './components/Contact'
import { MainFrame } from './components/MainFrame'
import { Replayer } from './components/Replayer'

function App() {

  return (
    <div className='App'>
      <header></header>
      <MainFrame/>
      <Replayer/>
      <ArtistGallery/>
      <section className='contact'>
        <ContactForm/>
      <div className='contact-info'>
        <ContactInfo/>
      </div>
      </section>
      <footer></footer>
    </div>
  )
}

export default App
