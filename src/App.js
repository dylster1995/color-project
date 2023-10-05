import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path='/' 
          element={<PaletteList palettes={seedColors} />}
        />
        <Route 
          path='/palette/:paletteId' 
          element={<Palette />}
        />
        <Route 
          path='/palette/:paletteId/:colorId' 
          element={<SingleColorPalette palettes={seedColors} />} 
        />
      </Routes>
      
    </div>
  );
}

export default App;
