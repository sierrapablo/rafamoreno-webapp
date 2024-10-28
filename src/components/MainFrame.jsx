/* eslint-disable react/prop-types */
export function MainFrame({children}) {
    return(
        <>
        <section>
            <div><h1>{children}</h1></div>
            <div><h2>{children}</h2></div>
        </section>
        </>
    )
}