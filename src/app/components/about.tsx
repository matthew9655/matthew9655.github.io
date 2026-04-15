'use client'
import React, { useEffect, useState } from 'react';
import './about.css'
import texts from '../texts/aboutTexts'

export default function About() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const root = document.documentElement;
        const currentTheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
        setTheme(currentTheme);

        const observer = new MutationObserver(() => {
            setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
        });

        observer.observe(root, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div id="main-box">
            <img
                id="image"
                src={theme === 'dark' ? 'images/dark_mode_face.jpg' : 'images/face.jpg'}
                alt="pic of me"
            />
            <div id="text-box">
                <div id="name">{texts.name}</div>
                <div id="about1box">
                    <div>
                        <p>{texts.about11}</p>
                        <p>
                            {texts.about12}
                            <a id="sublink" target="_top" href={texts.link}>matt.choi531@gmail.com</a>
                        </p>
                        <p id="about13">{texts.about13}</p>
                    </div>
                </div>
            </div>
            <div id="socials">
            <a id="link" target="_blank" href="mailto:matt.choi531@gmail.com">Email</a> 
            <a id="link" target="_blank" href="https://twitter.com/matt_choi_cs">X</a>
            <a id="link" target="_blank" href="https://github.com/matthew9655">Github</a>
            <a id="link" target="_blank" href="https://www.linkedin.com/in/matthew-choi-623aa0167/">LinkedIn</a>
            </div>
        </div>
    );  
}