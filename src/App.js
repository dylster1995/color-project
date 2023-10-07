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

  return (
    <div className="App">
      <Routes>
        <Route 
          path='/' 
          element={<PaletteList palettes={seedColors} />}
        />
        <Route 
          path='/palette/:paletteId' 
          element={<Palette 
            select={select}
            setSelect={setSelect}
            showSnackbar={showSnackbar}
            setShowSnackbar={setShowSnackbar}
          />}
        />
        <Route 
          path='/palette/:paletteId/:colorId' 
          element={<SingleColorPalette 
            palettes={seedColors}
            select={select}
            setSelect={setSelect}
            showSnackbar={showSnackbar}
            setShowSnackbar={setShowSnackbar}
          />} 
        />
        <Route 
          path='/palette/new'
          element={<NewPaletteForm />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
