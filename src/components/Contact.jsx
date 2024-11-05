export function ContactForm () {
    return (
        <form id="contactForm">
            <div>
                <input type="text" id="user_name" placeholder="Nombre" required />
            </div>
            <div>
                <input type="text" id="subject" placeholder="Asunto" required />
            </div>
            <div>
                <input type="email" id="email" placeholder="Correo Electrónico" required />
            </div>
            <div>
                <input type="text" id="text-email" placeholder="Escribe tu consulta" required />
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export function ContactInfo () {
    return (
        <>
            <div className='contact-item'>
                <strong>Dirección: </strong>
                <span>Calle Falsa, 123</span>
            </div>
            <div className='contact-item'>
                <strong>Teléfono: </strong>
                <span>+34 666 777 888</span>
            </div>
            <div className='contact-item'>
                <strong>Email: </strong>
                <span>emaildeprueba@dominio.com</span>
            </div>
        </>
    )
}