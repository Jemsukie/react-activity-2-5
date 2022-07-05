import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import NewClock from './components/NewClock';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
      <Nav />
      <div className='container mt-5'>
        <h1>Hello</h1>
        <NewClock date = {new Date()} />
        <div className='row'>
          <Cards user = {{ name: 'Jemuel Lupo', message: 'I am a Web Developer' }} />
          {/* THis is how we pass props into a Component */}
        </div>
      </div>
    </>
  );
}

export default App;
