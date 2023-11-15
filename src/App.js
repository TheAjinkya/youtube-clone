import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import ComponentOne from './dashboard/ClassComp/ComponentOne';
import CompOne from './dashboard/Hooks/CompOne';
// import { VideoDetail, Navbar, ChannelDetail, SearchFeed, Feed } from './components/index'


function App() {
  return (<>
    <CompOne/>
  </>);
}

export default App;
