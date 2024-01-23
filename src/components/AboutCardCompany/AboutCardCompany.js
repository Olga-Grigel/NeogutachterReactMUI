import './AboutCardCompany.css';
import stars5 from '../../images/stars-5.svg';
import star1 from '../../images/Star1.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AboutCardCompany() {
    return (
        <Box>
            <Typography sx={{
                fontFamily: 'Roboto',
                fontSize: {
                    mobileMS: '1.31vw',
                    mobileXS: '3.72vw'
                },
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
                letterSpacing: {
                    mobileMS: 'normal',
                    mobileXS: '-0.3px'
                },
                color: '#393939',
            }}>Hervorragend</Typography>
            <img src={stars5} className="stars" alt='stars' />
            <Typography sx={{
                width: {
                    mobileMS: '19.93vw',
                    mobileXS: '34.3vw'
                },
                fontFamily: 'Inter',
                fontSize: {
                    mobileMS: '1.11vw',
                    mobileXS: '3.72vw'
                },
                fontStyle: 'normal',
                fontWeight: '400',
                letterSpacing: {
                    mobileMS: 'normal',
                    mobileXS: '-0.3px'
                },
                lineHeight: {
                    mobileMS: '1.66vw',
                    mobileXS: 'normal'
                },
                color: '#393939',
            }}>Sehen Sie unsere <span className="boldfont">18</span> Bewertungen auf</Typography>
            <img src={star1} className="star" alt='star' />
            <Typography sx={{
                display: 'inline-block',
                fontFamily: 'Roboto',
                fontSize: {
                    mobileMS: '1.55vw',
                    mobileXS: '5.94vw'
                },
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: {
                    mobileMS: '3.36vw',
                    mobileXS: '12.86vw'
                },
                letterSpacing: 'normal',
                color: '#393939',
                verticalAlign: 'top'
            }}>Trustpilot</Typography>
        </Box>
    );
}

export default AboutCardCompany;