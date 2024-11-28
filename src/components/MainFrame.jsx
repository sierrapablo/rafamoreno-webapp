import imagenPortada from '../assets/DsC02074.jpg'

export function MainFrame() {
    return(
        <>
        <section className='portada'>
            <img className="portada-img" src={imagenPortada} alt="imagen portada" />
            <div className='portadaText'>
                <h1 className='portada-titulo'>Rafael Moreno</h1>
                <h2 className='portada-subtitulo'>Productor musical</h2>
            </div>
        </section>
        </>
    )
}