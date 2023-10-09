import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DraggableColorBox from './DraggableColorBox';
import { Button, TextField } from '@mui/material';
import { nounsArray, adjArray } from './colorNamesHelper';
import { useNavigate } from 'react-router-dom';
import { ChromePicker } from 'react-color';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    height: 'calc(100vh - 64px)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NewPaletteForm = ({ savePalette }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [colorPickerValue, setColorPickerValue] = useState('#000000');
  const [colorName, setColorName] = useState('');
  const [isErrorColorName, setIsErrorColorName] = useState(false);
  const [errorMessageColorName, setErrorMessageColorName] = useState('');
  const [isErrorHex, setIsErrorHex] = useState(false);
  const [errorMessageHex, setErrorMessageHex] = useState('');
  const [colors, setColors] = useState([
    {
        name: 'red',
        color: '#ff0000' 
    },
    {
        name: 'purple',
        color: '#800080'
    }
]);
  const newPalette = {
    paletteName: 'temp palette',
    id: 'temp-palette',
    emoji: ':P',
    colors: [...colors]
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleGetRandomColor = (evt) => {
    const chars = '0123456789abcdef';
    let color = '#';
    do {
        for(let i = 0; i < 6; i++){
            color += chars[Math.floor(Math.random() * chars.length)];
        }
    } while( colors.map( c => c.hex).includes(color) )
    const colorName = getColorName();
    setColors( oldColors => [...oldColors, { color: color, name: colorName }] );
  }
  const getColorName = () => {
    let adjective = '';
    let noun = '';
    do {
        adjective = adjArray[Math.floor(Math.random() * adjArray.length)];
        noun = nounsArray[Math.floor(Math.random() * nounsArray.length)];
    } while(colors.map(c => c.colorName).includes(`${adjective} ${noun}`))

    return `${adjective} ${noun}`;
  }
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (colorName === '') { 
        setIsErrorColorName(true);
        setErrorMessageColorName('Please enter a name.');
        return;
    }
    if(colors.map( c => c.colorName ).includes(colorName)) {
        return;
    } 

    if (colors.map( c => c.hex ).includes(colorPickerValue)) {
        setIsErrorHex(true);
        setErrorMessageHex('This color has already been used.');
        return;
    }
    setColors( oldColors => [...oldColors, { color: colorPickerValue, name: colorName}]);
    setColorName('');
  }
  const handleChangeColorName = (evt) => {
    setColorName(evt.target.value); 
    if (evt.target.value !== '') {
        setIsErrorColorName(false);
    } 
    if (colors.map( c => c.colorName ).includes(evt.target.value)){
        setIsErrorColorName(true);
        setErrorMessageColorName('This name is already in use!');
        return;
    }
  }
  const handleChangeColorPicker = (newColor) => {
    setIsErrorHex(false);
    setErrorMessageHex('');
    setColorPickerValue(newColor.hex);
    if (colors.map( c => c.hex).includes(newColor.hex)) {
        setIsErrorHex(true);
        setErrorMessageHex('This color has already been used.');
    }
  }
  const handleReset = () => {
    setColorPickerValue('#000000');
    setColorName('');
    setIsErrorColorName(false);
    setErrorMessageColorName('');
    setIsErrorHex(false);
    setErrorMessageHex('');
    setColors([]);
  }
  const handleDelete = (evt) => {
    setColors( oldColors => [...oldColors.filter(c => c.name !== evt.target.dataset.name)]);
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='default'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Make a New Palette
          </Typography>
          <div>
            <Button
                variant='contained'
                color='warning'
                sx={{margin: '2px'}}
                onClick={ () => navigate('/')}
            >
                Back to Home
            </Button>
            <Button 
                variant='contained' 
                color='primary' 
                onClick={() => { savePalette(newPalette); navigate('/'); }}
            >
                Save Palette
            </Button>
            </div>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Inside the Drawer */}
        <Typography variant='h4'>
            Design Your Palette
        </Typography>
        <div>
        <Button variant='contained' color='error' onClick={handleReset}>
            Clear Palette
        </Button>
        <Button variant='contained' color='success' onClick={handleGetRandomColor}>
            Random Color
        </Button>
        </div>
        <ChromePicker 
            color={colorPickerValue} 
            onChangeComplete={ (newColor) => handleChangeColorPicker(newColor) }
        />
        {
            isErrorHex ? <label style={{color: 'red'}}>{errorMessageHex}</label> : null
        }
            <form onSubmit={handleSubmitForm} style={{display: 'flex'}}>
                <TextField 
                    variant='outlined'
                    type='text' 
                    value={colorName} 
                    onChange={handleChangeColorName} 
                    sx={{
                        border: isErrorColorName ? '2px solid red' : 'none',
                    }}
                />
                <Button 
                    variant='contained' 
                    style={{backgroundColor: colorPickerValue}} 
                    onClick={handleSubmitForm}
                >
                    Add Color
                </Button>
                </form>
                {
                    isErrorColorName ? <label style={{color: 'red'}}>{errorMessageColorName}</label> : null
                }
        {/* End of Drawer */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader /> 
        {colors.map(color => <DraggableColorBox hex={color.color} key={color.name} colorName={color.name} handleDelete={handleDelete}/>)}
      </Main>
    </Box>
  );
}

export default NewPaletteForm;