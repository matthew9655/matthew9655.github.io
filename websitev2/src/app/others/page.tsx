import Options from "../options"
import "./others.css"
import projectTexts from "../texts/projectTexts"
import extracurricularTexts from "../texts/extracurricularTexts"

function MapConditional(project: any) {
    const emptyLink = project.link === '';
    const emptyDesc2 = project.description2 === '';

    return (
        <div key={project.title}>
            {(emptyLink && emptyDesc2) && (
                <div key={project.title}>
                    <p id="bold">{project.title}</p>
                    <li>{project.description1}</li>
                    <br/>
                </div>
            )}
            {(!emptyLink && emptyDesc2) && (
                <div key={project.title}>
                    <a id="sublink" target="_blank" href={project.link}>{project.title}</a>
                    <li>{project.description1}</li>
                    <br/>
                </div>
            )}
            {(emptyLink && !emptyDesc2) && (
                <div key={project.title}>
                    <p id="bold">{project.title}</p>
                    <li>{project.description1}</li>
                    <li>{project.description2}</li>
                    <br/>
                </div>
            )}
            {(!emptyLink && !emptyDesc2) && (
                <div key={project.title}>
                    <a id="sublink" target="_blank" href={project.link}>{project.title}</a>
                    <li>{project.description1}</li>
                    <li>{project.description2}</li>
                    <br/>
                </div>
            )}
        </div>
    )
}

export default function Others() {
    return (
    <div id="others">
        <Options/>
        <div id="oth-main-box">
            <br/>
            <p id="type-header">Projects</p>
            {projectTexts.map(project => (
                MapConditional(project)
            ))}
            <br/>
            <p id="type-header">Volunteering</p>
            {extracurricularTexts.map(project => (
                MapConditional(project)
            ))}
            <br/>
        </div>
    </div>
    
    )
}