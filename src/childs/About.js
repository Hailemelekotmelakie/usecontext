import React, { useContext } from "react";
import Contact from '../childs/Contact'
import { NameContext } from "../helper/context";

function About() {
    const name = useContext(NameContext)
    return (
        <>
            <div style={{ padding: "40px" }}>
                About  -----  {name}
            </div>
            <Contact />
        </>
    )
}
export default About