import { useState, useEffect, React } from 'react'
import Loader from './components/Loader';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import data from './data';


export default function App () {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        const handleLoad = () => {
            setIsLoaded(true);
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad);
        }
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!isLoaded) {
        return (
            <Loader />
        )
    }


     const head = data.map(info => {
        return (
            <Header 
                key={info.id}
                {...info}
            />
        )
     })

     const footer = data.map(footInfo => {
        return (
            <Footer 
                key={footInfo.id}
                {...footInfo}
            />
        )
     })

    return (
        <div>
            <Nav />
            {head}
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            {footer}
        </div>
    )
}