import About from './components/sections/About/About';
import Hero from './components/sections/Hero/Hero';
import Nav from './components/sections/Nav/Nav';
import ProjectList from './components/sections/Projects/ProjectList';
import TechStack from './components/sections/CoreCapabilities/CoreCapabilities';
import MyProcess from './components/sections/MyProcess/MyProcess';
import CTA from './components/sections/CTA/CTA';
import GitActivity from './components/sections/GitActivity/GitActivity';
import Footer from './components/sections/Footer/Footer';

import useTheme from './components/hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="app">
      <main>
        <Nav theme={theme} setTheme={setTheme} />
        <Hero />
        <TechStack />
        <ProjectList />
        <About />
        <MyProcess />
        <GitActivity />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
