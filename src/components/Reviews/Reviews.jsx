import CardCompany from '../CardCompany/CardCompany';
import Box from '@mui/material/Box';
import MarqueeCard from '../Marquee/Marquee'

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
                    height: '29.86vw',
                    alignSelf: 'center'
                }}>
                <MarqueeCard delay={5} />
                <MarqueeCard delay={1} />
            </Box>
        </Box>
    );
}

export default Reviews;