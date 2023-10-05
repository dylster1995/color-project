import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
// import { generatePalette } from './colorHelpers';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors}/>}/>
        <Route path='/palette/:paletteId' element={<Palette />}/>
        <Route path='/palette/:paletteId/:colorId' element={<h1>single color page</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;
