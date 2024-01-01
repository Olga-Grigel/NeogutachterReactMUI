import CardCompany from '../CardCompany/CardCompany';
// import Marquee from 'react-double-marquee';
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
            {/* <Box
                sx={{
                    width: '63.8%',
                    whiteSpace: 'nowrap'
                }}>
                <Marquee direction="left">
                    really long textSome really really  ccccccccccccccccreally really really long text
                </Marquee>
            </Box> */}

        </Box>
    );
}

export default Reviews;