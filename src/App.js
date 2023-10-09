import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [select, setSelect] = useState('hex');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [palettes, setPalettes] = useState(seedColors);

  const savePalette = (newPalette) => {
    setPalettes( oldPalettes => [...oldPalettes, newPalette]);
  }

  return (
    <div className="App">
      <Routes>
        <Route 
          path='/' 
          element={<PaletteList palettes={palettes} />}
        />
        <Route 
          path='/palette/:paletteId' 
          element={<Palette 
            palettes={palettes}
            select={select}
            setSelect={setSelect}
            showSnackbar={showSnackbar}
            setShowSnackbar={setShowSnackbar}
          />}
        />
        <Route 
          path='/palette/:paletteId/:colorId' 
          element={<SingleColorPalette 
            palettes={palettes}
            select={select}
            setSelect={setSelect}
            showSnackbar={showSnackbar}
            setShowSnackbar={setShowSnackbar}
          />} 
        />
        <Route 
          path='/palette/new'
          element={<NewPaletteForm savePalette={savePalette} />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
