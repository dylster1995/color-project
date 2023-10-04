import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Palette palette={generatePalette(seedColors[4])}/>}/>
        <Route path='/palette/:id' element={<h1>INDIVIDUAL PALETTE</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
