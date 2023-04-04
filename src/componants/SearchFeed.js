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
import { useParams } from 'react-router-dom';
import Videos from './Videos';
const SearchFeed = () => {
    const [video, setVideo] = useState([]);
    const { searchTerm } = useParams()



    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideo(data.items))
    }, [searchTerm]);

    return (
        <>
            <Box p={2} minHeight="95vh">
                <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
                    Search Results for <span style={{ color: "#FC1503" }} >{searchTerm}</span> videos
                </Typography>
                <Box display="flex">
                    <Box sx={{ mr: { sm: '100px' } }} />
                    {<Videos video={video} />}
                </Box>
            </Box>
        </>
    )
}

export default SearchFeed