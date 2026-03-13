import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
