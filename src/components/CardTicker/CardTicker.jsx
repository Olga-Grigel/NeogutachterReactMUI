import '../CardTicker/CardTicker.css'
import Box from '@mui/material/Box'
import doublequote from '../../images/doublequote.svg'
import stars5 from '../../images/stars-5.svg'
import Typography from '@mui/material/Typography'

function CardTicker() {
    return (
        <Box
            sx={{
                mr: {
                    mobileMS: '1.94vw',
                    mobileXS: '5.31vw',
                },
                width: {
                    mobileMS: '28.75vw',
                    mobileXS: '66.366vw',
                },
                p: {
                    mobileMS: '1.39vw',
                    mobileXS: '5.31vw',
                },
                boxSizing: 'border-box',
                borderRadius: {
                    mobileMS: '1.11vw',
                    mobileXS: '4.25vw',
                },
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
                    fontSize: {
                        mobileMS: '1.25vw',
                        mobileXS: '4.25vw',
                    },
                    lineHeight: {
                        mobileMS: '1.81vw',
                        mobileXS: '6.37vw',
                    },
                    color: '#171717',
                    mt: {
                        mobileMS: '0.56vw',
                        mobileXS: '2.12vw',
                    },
                    mb: {
                        mobileMS: '0.56vw',
                        mobileXS: '1.9vw',
                    },
                }}>
                Best on the market
            </Typography>
            <Typography
                sx={{
                    textWrap: 'wrap',
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: {
                        mobileMS: '0.97vw',
                        mobileXS: '3.72vw',
                    },
                    lineHeight: {
                        mobileMS: '1.39vw',
                        mobileXS: '5vw',
                    },
                    color: '#171717',
                }}>
                I love this product because the support is great. Please ...
            </Typography>
            <Typography
                sx={{
                    fontSize: {
                        mobileMS: '0.97vw',
                        mobileXS: '3.72vw',
                    },
                    lineHeight: {
                        mobileMS: '0.5vw',
                        mobileXS: '1.911vw',
                    },
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
                    fontSize: {
                        mobileMS: '0.97vw',
                        mobileXS: '3.72vw',
                    },
                    lineHeight: {
                        mobileMS: '1.53vw',
                        mobileXS: '5.84vw',
                    },
                    color: '#171717',
                    mt: {
                        mobileMS: '0.56vw',
                        mobileXS: '2.12vw',
                    },
                }}>
                Worldtraveler
            </Typography>

        </Box>
    );
}

export default CardTicker