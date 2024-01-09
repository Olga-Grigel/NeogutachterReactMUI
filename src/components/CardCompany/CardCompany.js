import './CardCompany.css';
import stars5 from '../../images/stars-5.svg';
import star1 from '../../images/Star1.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CardCompany() {
    return (
        <Box sx={{
            width: '36.2%',
        }}>
            <Box sx={{
                width: '56.4%',
                mt: '9.2vw',
                mr: '18.1%',
                ml: '25.5%',
                mb: '8.36vw',
            }}>
                < Typography sx={{
                    display: 'inline-block',
                    fontFamily: 'Lexend Deca',
                    fontSize: '2.78vw',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    mb: '1.838vw',
                    lineHeight: '3.89vw',
                    color: '#393939',
                    letterSpacing: 'normal',
                }} > Unsere Bewertungen auf

                    <span className="namecompany"> Trustpilot</span >

                </Typography >
                <Box>
                    <Typography sx={{
                        fontFamily: 'Roboto',
                        fontSize: '1.31vw',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#393939',
                    }}>Hervorragend</Typography>
                    <img src={stars5} className="stars" alt='stars' />
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '1.11vw',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        letterSpacing: 'normal',
                        lineHeight: '1.66vw',
                        color: '#393939',
                    }}>Sehen Sie unsere 18 Bewertungen auf</Typography>
                    <img src={star1} className="star" alt='star' />
                    <Typography sx={{
                        display: 'inline-block',
                        fontFamily: 'Roboto',
                        fontSize: '1.55vw',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '3.36vw',
                        letterSpacing: 'normal',
                        color: '#393939',
                        verticalAlign: 'top'
                    }}>Trustpilot</Typography>
                </Box>
            </Box>

        </Box >
    );
}

export default CardCompany;