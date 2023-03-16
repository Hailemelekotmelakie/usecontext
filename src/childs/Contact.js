import React, { useContext } from "react";
import { LoginContext, NameContext } from "../helper/context";

function Contact() {
    const name = useContext(NameContext)
    const { login, setLogin } = useContext(LoginContext)
    return (
        <>
            <div style={{ padding: "40px" }}>
                <button onClick={() => { setLogin(!login) }}>Click</button>
                {login ? <div>Has login --from contacts---</div> : <div>No Login {name}  --from contacts--</div>}
            </div>
        </>
    )
}
export default Contact