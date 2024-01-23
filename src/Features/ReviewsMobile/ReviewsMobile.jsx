import Box from '@mui/material/Box';
import MarqueeCard from '../MarqueeCard/MarqueeCard';
import NameCardCompany from '../../components/NameCardCompany/NameCardCompany';
import AboutCardCompany from '../../components/AboutCardCompany/AboutCardCompany';

function ReviewsMobile() {
    return (
        <Box
            sx={{
                display: {
                    mobileMS: 'none',
                    mobileXS: 'flex'
                },
                flexDirection: 'column'
            }}
        >
            <Box sx={{
                mt: '15.5vw',
                ml: '4.25vw'
            }}><NameCardCompany /></Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    ml: '4.25vw',
                }}><AboutCardCompany /></Box>
                <Box sx={{
                    width: '39vw',
                    mt: '-12vw'
                }}><MarqueeCard delay={5} /></Box>
            </Box>
            <Box sx={{
                mb: '17.26vw'
            }}><MarqueeCard delay={1} /></Box>
        </Box >
    );
}

export default ReviewsMobile;