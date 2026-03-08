import './App.css';
import Layout from './Pages/Layout.jsx';
import Hero from './components/Accueil/Hero.jsx';
import About from './components/Accueil/About.jsx';
import Parcours from './components/Accueil/Parcours.jsx';
import Projets from './components/Accueil/Projets.jsx';
import ContactForm from './components/Formulaire/FormulaireG6.jsx';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Parcours />
      <Projets />
      <ContactForm />
    </Layout>
  );
}

export default App;