import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Feed from './components/Feed';


function App() {
  return (<>
    <Box sx={{ backgroundColor: '#000' }}>
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Feed/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  </>);
}

export default App;
