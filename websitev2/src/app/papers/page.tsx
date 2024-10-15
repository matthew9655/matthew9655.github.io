import Options from "../options"
import texts from '../texts/paperTexts'
import './papers.css'

export default function Papers() {
    return (
    <div id="papers">
        <Options/>
        {texts.map(paper => (
            <div id="paper-box" key={paper?.doi}>
                <p> {paper?.authors}<span className="emphasized">{paper?.title}</span>{paper?.doi}
                [<a id="sub-header" target="_blank" href={paper?.link}>Link</a>]</p>
                <br/>
            </div>
        ))}
    </div>
    )
}