import CarouselLogosPartners from '../CarouselLogosPartners/CarouselLogosPartners'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './ThirdScreen.css'


function ThirdScreen() {
    return (
        <Box
            sx={{
                p: '6.94vw 0 6.6vw',
                backgroundColor: '#FCFCFC'
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    letterSpacing: 'normal',
                    fontFamily: 'Lexend Deca',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '2.778vw',
                    lineHeight: '3.889vw',
                    color: '#393939',
                    mb: '3.333vw',
                    ml: '0.417vw'
                }}>
                Unsere <marker className='yellowmarker'>Partner</marker>
            </Typography>
            <CarouselLogosPartners />
        </Box>

    )
}
export default ThirdScreen