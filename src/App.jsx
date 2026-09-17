import './App.css';

import Layout from './Pages/Layout.jsx';

import Hero from './components/Accueil/Hero.jsx';
import About from './components/Accueil/About.jsx';
import Parcours from './components/Accueil/Parcours.jsx';
import Activities from './components/Accueil/Activities.jsx';
import Projets from './components/Accueil/Projets.jsx';

import ContactForm from './components/Formulaire/FormulaireG6.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-[#05030d]">
      {/* Main content */}
      <div className="relative z-10">
        <Layout>
          <Hero />
          <About />
          <Parcours />
          <Activities />
          <Projets />
          <ContactForm />
        </Layout>
      </div>
    </div>
  );
}

export default App;