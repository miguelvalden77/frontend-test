import { useEffect, useRef, useState } from "react"
import { NavTestForm } from "../../components/create-test/NavTestForm"
import { ProjectForm } from "../../components/create-test/ProjectForm/ProjectForm"
import { PublishTest } from "../../components/create-test/Publicar/PublishTest"
import { CuestionesForm } from "../../components/create-test/CuestionesForm/CuestionesForm"
import { CuestionesAside } from "../../components/create-test/CuestionesAside"

export const CreateTest = () => {

    const [testComponent, setTestComponent] = useState("project")
    const createTestPage = useRef(null)

    useEffect(() => {
        const outsideClick = (evt) => {
            if (createTestPage.current && !createTestPage.current.contains(evt.target)) {

                console.log("click fuera")
            }
        }

        document.addEventListener("mousedown", outsideClick)

        return () => {
            document.removeEventListener("mousedown", outsideClick)
        }

    }, [createTestPage])

    return (
        <div ref={createTestPage}>
            <h1>Create Test</h1>
            <NavTestForm setTestComponent={setTestComponent} />
            <h1>{testComponent}</h1>
            <ProjectForm setTestComponent={setTestComponent} display={testComponent == "project" ? { dislay: "block" } : { display: "none" }} />
            <CuestionesForm setTestComponent={setTestComponent} display={testComponent == "cuestiones" ? { dislay: "block" } : { display: "none" }} />
            <PublishTest display={testComponent == "publish" ? { dislay: "block" } : { display: "none" }} />
        </div>
    )
}