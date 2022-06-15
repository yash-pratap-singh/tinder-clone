import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      

      {/* Components : 
        
          Header 
          TinderCards
          SwipeButtons 
      
      */}

      <Header/>
      <TinderCards/>
      <SwipeButtons/>

    </div>
  );
}

export default App;
