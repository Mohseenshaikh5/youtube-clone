import React from 'react'
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
import { Link } from 'react-router-dom';
import { logo } from '../utils/contance'
import SearchBar from './SearchBar';
const Navabr = () => {
    return (
        <Stack direction="row" alignItems="center" p={2}
            sx={{
                position: 'sticky', background: "#000",
                top: "0", justifyContent: 'space-between'
            }}>
            <Link to='/' style={{ display: 'flex', alignItems: "center" }}>
                <img src={logo} alt='logo ' height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navabr