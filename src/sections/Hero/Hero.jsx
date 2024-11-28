import heroBackground from '../../assets/hero-background.jpg'
import './Hero.css'

export function Hero () {
  return (
    <>
      <section className='portada'>
        <img
          className='portada-img'
          src={heroBackground}
          alt='imagen portada'
        />
        <div className='portadaText'>
          <h1 className='portada-titulo'>Rafael Moreno</h1>
          <h2 className='portada-subtitulo'>Productor musical</h2>
        </div>
      </section>
    </>
  )
}
