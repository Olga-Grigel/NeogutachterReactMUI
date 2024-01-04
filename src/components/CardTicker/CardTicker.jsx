import '../CardTicker/CardTicker.css'
import Box from '@mui/material/Box';
import doublequote from '../../images/doublequote.svg';
import stars5 from '../../images/stars-5.svg';
import Typography from '@mui/material/Typography';

function CardTicker() {
    return (
        <Box
            sx={{
                width: '28.75vw',
                p: '1.39vw',
                boxSizing: 'border-box',
                borderRadius: '1.11vw',
                boxShadow: '0px 12px 24px 0px rgba(27, 59, 119, 0.05), 0px 24px 60px 0px rgba(6, 47, 125, 0.05), 0px 2px 4px 0px rgba(7, 4, 146, 0.10)'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                <img src={doublequote} className="doublequote" alt='doublequote' />
                <img src={stars5} className="starsmini" alt='stars' />
            </Box>
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '1.25vw',
                    lineHeight: '1.81vw',
                    color: '#171717',
                    mt: '0.56vw',
                    mb: '0.56vw'
                }}>
                Best on the market
            </Typography>
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '0.97vw',
                    lineHeight: '1.39vw',
                    color: '#171717',
                    wordWrap: 'break-word'
                }}>
                I love this product because the support is great. Please <br />...
            </Typography>
            <Typography
                sx={{
                    fontSize: '0.97vw',
                    lineHeight: '0.5vw',
                    color: '#D4D4D8'
                }}>
                _________
            </Typography>
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '0.97vw',
                    lineHeight: '1.53vw',
                    color: '#171717',
                    mt: '0.56vw'
                }}>
                Worldtraveler
            </Typography>

        </Box>
    );
}

export default CardTicker