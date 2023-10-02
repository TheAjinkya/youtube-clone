import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { VideoDetail, Navbar, ChannelDetail, SearchFeed, Feed } from './components/Index'


function App() {
  return (<>
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </>);
}

export default App;
