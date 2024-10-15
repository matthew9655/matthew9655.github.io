import * as React from 'react';
import About from "./components/about"
import Options from "./options"
import './page.css'

export default function MyApp() {
  return (
    <div id="app">
      <Options />
      <About />
    </div>
  );
}
