import { useState } from "react";
import { Link } from "react-router-dom";
import { MainComponentTitles } from "../Models";

const Intro = ()=>{

    const [intro, setIntro] = useState(MainComponentTitles)

    return (
        <div className="row text-white h-100 d-flex align-items-center mx-0">
            <div className="mainContainer">
                <h1 className="mainTitle mb-5">{intro.LastChance}</h1>
                <h3 className="secondaryTitle mb-4">{intro.Introduction}</h3>
                <div className="paragrphContainer px-5 fw-bold mb-4">
                    <p>{intro.FirstParagraph}</p>
                    <p>{intro.SecondParagraph}</p>
                    <p>{intro.ThirdParagraph}</p>
                </div>
                <Link type="button" className="btn btn-light px-5 fw-bold" to={'/quiz'}>Save humanty!!</Link>
            </div>
        </div>
    )
}

export default Intro;