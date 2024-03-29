import CardCompany from '../CardCompany/CardCompany';
import Box from '@mui/material/Box';
import MarqueeCard from '../MarqueeCard/MarqueeCard'

function Reviews() {
    return (
        <Box
            sx={{
                display: {
                    mobileMS: 'flex',
                    mobileXS: 'none'
                },
                justifyContent: 'space-between',
            }}
        >
            <CardCompany />
            <Box
                sx={{
                    width: '63.8%',
                    whiteSpace: 'nowrap',
                    height: '29.86vw',
                    alignSelf: 'center',
                    mt: {
                        mobileM: '0',
                        mobileXS: '50px'
                    }
                }}>
                <Box><MarqueeCard delay={5} /></Box>
                <Box><MarqueeCard delay={1} /></Box>
            </Box>
        </Box >
    );
}

export default Reviews;