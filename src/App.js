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
    setPalettes( oldPalettes => {
      const oldPaletteIds = oldPalettes.map(p => p.id);
      if( oldPaletteIds.includes(newPalette.id)){
        const newPalettes = [...oldPalettes.filter(p => p.id !== newPalette.id)];
        newPalettes.push(newPalette);
        return newPalettes;
      }
      return [...oldPalettes, newPalette];
  })}
  const deletePalette = (deletePalette) => {
    setPalettes( oldPalettes => [...oldPalettes.filter( p => p.id !== deletePalette.id )] );
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
          path='/new/palette/'
          element={<NewPaletteForm savePalette={savePalette} palettes={palettes} isEdit={false} />}
        />
        <Route 
            path='/edit/palette/:paletteId'
            element={<NewPaletteForm savePalette={savePalette} palettes={palettes} deletePalette={deletePalette} isEdit={true} />}
          />
      </Routes>
      
    </div>
  );
}

export default App;
