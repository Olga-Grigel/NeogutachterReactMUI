import './NameCardCompany.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NameCardCompany() {
    return (
        <Box sx={{
            fontSize: {
                mobileMS: '2.78vw',
                mobileXS: '6.9vw'
            },
            lineHeight: {
                mobileMS: '3.89vw',
                mobileXS: '9vw'
            },
        }}>
            < Typography sx={{
                display: {
                    mobileMS: 'inline-block',
                    mobileXS: 'block'
                },
                fontFamily: 'Lexend Deca',
                fontSize: 'inherit',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'inherit',
                color: '#393939',
                letterSpacing: {
                    mobileMS: 'normal',
                    mobileXS: '-0.5px'
                },
            }} > Unsere Bewertungen

            </Typography >
            < Typography sx={{
                display: 'inline-block',
                fontFamily: 'Lexend Deca',
                fontSize: 'inherit',
                fontStyle: 'normal',
                fontWeight: '700',
                mb: {
                    mobileMS: '1.838vw',
                    mobileXS: '6.37vw'
                },
                lineHeight: 'inherit',
                color: '#393939',
                letterSpacing: {
                    mobileMS: 'normal',
                    mobileXS: '-0.5px'
                },
            }} >auf

                <span className="namecompany"> Trustpilot</span >

            </Typography >
        </Box>
    );
}

export default NameCardCompany;