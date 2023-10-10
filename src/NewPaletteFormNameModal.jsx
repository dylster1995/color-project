import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EmojiPicker from './EmojiPicker';
import { useNavigate } from 'react-router-dom';

export default function NewPaletteFormNameModal({ setShowModal, showModal, savePalette, colors }) {
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState('');
  const [paletteName, setPaletteName] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setPaletteName('');
  };
  const handlePaletteNameChange = (evt) => {
    setPaletteName(evt.target.value);
  }
  const handleSubmit = () => {
    setError('');
    if (paletteName === '' || emoji === '') {
      if (paletteName === ''){
        setError(oldError => oldError + 'Please enter a name. ');
      }
      if (emoji === ''){
        setError(oldError => oldError + 'Please select an emoji. ');
      } 
      return;
    }

    const newPalette = {
      paletteName: paletteName,
      id: paletteName.replace(' ', '-'),
      emoji: emoji,
      colors: [...colors]
    }
    savePalette(newPalette);
    navigate('/');

  }

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        {
          error !== '' ? <DialogTitle style={{color: 'red'}}>{error}</DialogTitle> : null
        }
        <DialogTitle>{`1. Name your palette.`}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Palette name"
            type="text"
            fullWidth
            variant="standard"
            value={paletteName}
            onChange={handlePaletteNameChange}
          />
        </DialogContent>
        <DialogTitle>{`2. Select an Emoji.`}</DialogTitle>
          <EmojiPicker emoji={emoji} setEmoji={setEmoji}/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1>{emoji}</h1>
          </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}