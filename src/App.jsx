import './App.css';

import Layout from './Pages/Layout.jsx';
import NetworkBackground from './components/NetworkBackground.jsx';

import Hero from './components/Accueil/Hero.jsx';
import About from './components/Accueil/About.jsx';
import Parcours from './components/Accueil/Parcours.jsx';
import Activities from './components/Accueil/Activities.jsx';
import Projets from './components/Accueil/Projets.jsx';

import ContactForm from './components/Formulaire/FormulaireG6.jsx';

function App() {
  return (
    <div className="site-shell relative min-h-screen">
      <NetworkBackground
        fixed
        particleCount={48}
        maxDistance={120}
        color="168, 85, 247"
        speed={0.35}
      />

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