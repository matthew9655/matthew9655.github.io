import React from 'react';
import './about.css'
import texts from '../texts/aboutTexts'

export default function About() {
    return (
        <div id="main-box">
            <img id="image" src="/images/face.jpg" alt="Picture of the author"/>
            <div id="text-box">
                <div id="name">{texts.name}</div>
                <div id="about1box">
                    <div>
                        {texts.about11} 
                        <a id="sublink" target="_blank" href={texts.link1}>Vector Institute</a>
                        {texts.about12}
                        <a id="sublink" target="_blank" href={texts.link2}>University of Toronto </a>
                        {texts.about13}
                        <a id="sublink" target="_blank" href={texts.link3}>Alán Aspuru-Guzik</a>
                        {texts.about14}
                        {texts.about21}
                        {texts.about22}
                        <a id="sublink" target="_blank" href={texts.link4}>Modiface</a>
                        {texts.about23}
                        {texts.about31}
                        <br/>
                    </div>
                </div>
            </div>
            {/* <div id="about2box">
                <div>
                    {texts.about21}
                    {texts.about22}
                    <a id="sublink" target="_blank" href={texts.link4}>Modiface</a>
                    {texts.about23}
                    <br/> <br/>
                    {texts.about31}
                    {texts.about32}
                    <a id="sublink" target="_top" href="mailto:matt.choi531@gmail.com">matt.choi531@gmail.com</a>
                    <br/>
                </div>
            </div> */}
            <div id="socials">
            <a id="link" target="_blank" href="mailto:matt.choi531@gmail.com">Email</a> 
            <a id="link" target="_blank" href="https://twitter.com/matt_choi_cs">X</a>
            <a id="link" target="_blank" href="https://github.com/matthew9655">Github</a>
            <a id="link" target="_blank" href="https://www.linkedin.com/in/matthew-choi-623aa0167/">LinkedIn</a>
            </div>
        </div>
    );  
}