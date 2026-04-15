import Header from "../components/header";
import "./experience.css"
import internshipTexts from "../texts/internshipTexts"

export default function Experience() {
    return (
    <div id="experience">
        <Header />
        <div id="exp-main-box">
            {internshipTexts.map((internship, index) => (
                <div id="exp-box" key={`${internship.title}-${internship.date}-${index}`}>
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