import { useState } from "react"
import { AdvertiseFinish } from "./AdvertiseFinish"

export function FinishTest() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen && <AdvertiseFinish setIsOpen={setIsOpen} />}
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Terminar el test</button>
        </>
    )
}
