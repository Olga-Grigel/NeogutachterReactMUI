import CarouselLogosPartners from '../CarouselLogosPartners/CarouselLogosPartners'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './ScreenWithCarousel.css'


function ScreenWithCarousel() {
    return (
        <Box
            sx={{
                p: {
                    mobileM: '6.9vw 0 6.3vw',
                    mobileXS: '15vw 0 8vw',
                },
                backgroundColor: '#FCFCFC',
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    letterSpacing: 'normal',
                    fontFamily: 'Lexend Deca',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: {
                        mobileM: '2.778vw',
                        mobileMS: '3.778vw',
                        mobileXS: '6.9vw',
                    },
                    lineHeight: {
                        mobileMS: '3.889vw',
                        mobileXS: '9.56vw',
                    },
                    color: '#393939',
                    mb: {
                        mobileMS: '3vw',
                        mobileXS: '2.65vw',
                    },
                    ml: '0.417vw'
                }}>
                Unsere <span className='carousel__highlighting'>Partner</span>
            </Typography>
            <CarouselLogosPartners />
        </Box>

    )
}
export default ScreenWithCarousel