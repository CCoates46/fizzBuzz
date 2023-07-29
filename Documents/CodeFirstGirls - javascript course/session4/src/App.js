import karaoke from './karaoke.jpeg'
import './App.css';

const myName = 'Clare Coates';
const favoriteArtists = ['Whitney Houston', 'Christina Aguilera', 'Adele', 'Beyonce', 'Ed Sheeran', 'Sam Smith', 'and many others']

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={karaoke} className="App-logo" alt="logo" />

        <div className="header">
        <h2>Hi my name is {myName}</h2>
        <h3 className="Fun-Fact">FUN FACT 1!</h3>
        <p> I used to be a karaoke compere 😃 and you would often find me singing in pubs around the North East of England.</p>
        
        <h3 className="Fun-Fact">FUN FACT 2!</h3>
        I once auditioned for X Factor!
        </div>

        <div className="List">Artists I generally tend to cover are: {favoriteArtists.map(paragraph => <p> * {paragraph}</p>)}</div>
        
        <a
          className="App-link"
          href="https://open.spotify.com/collection/playlists"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Spotify playlists
        </a>

        <div className="footer">Made by CCoates ♡</div>

      </header>
    </div>
  );
}

export default App;
