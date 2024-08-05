

export const NavTestForm = ({ setTestComponent }) => {

    const activateComponent = (evt) => {
        setTestComponent(evt.target.value)
    }

    return (
        <section>
            <button onClick={activateComponent} value={"project"}>Proyecto</button>
            <button onClick={activateComponent} value={"cuestiones"}>Cuestiones</button>
            <button onClick={activateComponent} value={"publish"}>Publicar</button>
        </section>
    )
}