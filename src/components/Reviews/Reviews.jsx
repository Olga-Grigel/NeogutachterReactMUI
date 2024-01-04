import CardCompany from '../CardCompany/CardCompany';
import CardTicker from '../CardTicker/CardTicker'
import Marquee from 'react-double-marquee';
import Box from '@mui/material/Box';

function Reviews() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <CardCompany />
            <Box
                sx={{
                    width: '63.8%',
                    whiteSpace: 'nowrap',
                    border: '1px solid red',
                }}>
                <Marquee direction="left">
                    <CardTicker />
                </Marquee>
            </Box>

        </Box>
    );
}

export default Reviews;