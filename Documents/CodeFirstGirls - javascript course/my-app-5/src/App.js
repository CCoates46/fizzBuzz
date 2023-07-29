import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Welcome from './Welcome';
import Footer from './Footer';
import Snippet from './Snippet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Welcome name="Clare" />
        
        <Snippet 
        title="Nurse's notes found in home search"
        timeAgo="2h"
        category="Liverpool" />

        <Snippet 
        title="Fisherman rescued on Island after days without food"
        timeAgo="1h"
        category="Australia" />

        <Snippet 
        title="Kate Bush song in running for Top Award  38 years after release"
        timeAgo="4m"
        category="Entertainment & Arts" />
        
        <Button/>
        
        <Footer date= "18/04/2023" />
      </header>
      
    </div>
  );
}

export default App;
