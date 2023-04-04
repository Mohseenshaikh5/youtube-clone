import './App.css';
import { useEffect, useMemo, useState } from 'react';
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  ListItemIcon,
  Box,
  TextField,
  Tooltip,


} from '@mui/material';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './componants/Home';
import ChannelDetail from './componants/ChannelDetail'
import VideoDetail from './componants/VideoDetail'
import SearchFeed from './componants/SearchFeed'
import Navabr from './componants/Navabr'

function App() {
  return (

    <div >
      <BrowserRouter>
        <Box sx={{ background: '#000' }}>
          <Navabr />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/video/:id' exact element={<VideoDetail />} />
            <Route path='/channel/:id' exact element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' exact element={<SearchFeed />} />

          </Routes>
        </Box>
      </BrowserRouter>

    </div>
  );
}

export default App;
