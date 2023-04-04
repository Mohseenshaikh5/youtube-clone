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
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ video, direction }) => {
    console.log(video)
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} >
            {video.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard Videos={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}

        </Stack>
    )
}

export default Videos