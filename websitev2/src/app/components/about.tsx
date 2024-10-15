import React from 'react';
import './about.css'
import texts from '../texts/aboutTexts'
import profilePic from '../face.jpg'
import Image from 'next/image'

export default function About() {
    return (
        <div id="main-box">
            <Image id="image" src={profilePic} alt="Picture of the author"/>
            <div id="text-box">
                <div id="name">{texts.name}</div>
                <div id="about1box">
                    <div>
                        {texts.about11} 
                        <a id="sublink" target="_blank" href={texts.link1}>Vector Institute</a>
                        {texts.about12}
                        <a id="specialsublink" target="_blank" href={texts.link2}>University of Toronto </a>
                        {texts.about13}
                        <a id="sublink" target="_blank" href={texts.link3}>Alán Aspuru-Guzik</a>
                        {texts.about14}
                    </div>
                </div>
            </div>
            <div id="about2box">
                <div>
                    {texts.about21}
                    {texts.about22}
                    <a id="sublink" target="_blank" href={texts.link4}>Modiface</a>
                    {texts.about23}
                    <br/>
                    <br/>
                    {texts.about3}
                    <a id="sublink" target="_top" href="mailto:matt.choi531@gmail.com">matt.choi531@gmail.com</a>
                    <br/>
                </div>
            </div>
            <div id="socials">
            <a id="link" target="_blank" href="https://twitter.com/matt_choi_cs">Twitter</a>
            <a id="link" target="_blank" href="https://github.com/matthew9655">Github</a>
            <a id="link" target="_blank" href="https://www.linkedin.com/in/matthew-choi-623aa0167/">LinkedIn</a>
            </div>
        </div>
    );  
}