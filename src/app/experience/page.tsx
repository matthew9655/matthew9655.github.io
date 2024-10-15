import Options from "../options"
import "./experience.css"
import internshipTexts from "../texts/internshipTexts"

export default function Experience() {
    return (
    <div id="experience">
        <Options/>
        <div id="exp-main-box">
            {internshipTexts.map(internship => (
                <div id="exp-box" key="internship.title">
                    <p id="type-header">{internship.title}</p>
                    <p>{internship.date}</p>
                    <ul> <li> {internship.description} </li> </ul>
                    <br/>
                </div>
            ))}
        </div>
    </div>
    
    )
}