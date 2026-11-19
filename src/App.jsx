import { useState } from 'react'
import Header from './components/Header/Header.jsx' 
import Card from './components/ProfileCard/ProfileCard.jsx'
import Footer from './components/Footer/Footer.jsx'
import heroImg from './assets/hero.png';
import reactImg from './assets/react.svg';
import viteImg from './assets/vite.svg';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header title='My Profile Page' />
    <section className={styles.cards}>
    <Card avatar={heroImg} name='hero' description='hero is blah blah Friend = green' type='Friend' />
    <Card avatar={reactImg} name='react' description='react is blah blah Teacher = blue' type='Teacher' />
    <Card avatar={viteImg} name='vite' description='vite is blah blah Student = purple' type='Student' />
    </section>
    <Footer />
    </>
  )
}

export default App
