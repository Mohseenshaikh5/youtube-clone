import React, { useState, useEffect } from 'react'
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
import { fetchFromAPI } from '../utils/fetchdataApi';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Hello = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [video, setVideo] = useState([]);

    useEffect(() => {
        // setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideo(data.items))
            .then((error) => { console.log(error) })
    }, [selectedCategory]);

    return (
        <>
            <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                    <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                        Copyright © 2022 JSM Media
                    </Typography>
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                        {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
                    </Typography>

                    <Videos video={video} />
                </Box>
            </Stack>
        </>
    )
}

export default Hello