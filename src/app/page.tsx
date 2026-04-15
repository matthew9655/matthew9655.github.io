import * as React from 'react';
import About from "./components/about"
import Header from "./components/header";
import './page.css'

export default function MyApp() {
  return (
    <div id="app">
      <Header />
      <About />
    </div>
  );
}
