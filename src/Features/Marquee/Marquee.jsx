import CardTicker from '../../components/CardTicker/CardTicker'
import Marquee from "react-fast-marquee";
import Box from '@mui/material/Box';

function MarqueeCard({ delay }) {
    return (
        <Marquee direction="left" speed="30" delay={delay} pauseOnClick='true' >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                mb: '1.94vw'
            }}>
                <CardTicker />
                <CardTicker />
            </Box>
        </ Marquee>
    );
}

export default MarqueeCard;