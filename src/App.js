import './App.css';
import Header from './components/header/Header';
import 'typeface-montserrat';
import 'typeface-raleway';
import Section from './components/section/Section';
import About from './components/about/About';
import Singers from './components/singers/Singers';
import Tier from './components/tier/Tier';
import Sponsors from './components/sponsors/Sponsors'
import Testimonials from './components/testimonials/Testimonials';
import Shots from './components/shots/Shots';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <About/>
      <Singers/>
      <Tier/>
      <Sponsors/>
      <Testimonials/>
      <Shots/>
      <Footer/>
    </div>
  );
}

export default App;