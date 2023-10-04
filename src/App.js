import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>ALL PALETTES</h1>}/>
        <Route path='/palette/:paletteId' element={<Palette palette={generatePalette(seedColors[4])}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
