import Box from '@mui/material/Box';
import NameCardCompany from '../../components/NameCardCompany/NameCardCompany';
import AboutCardCompany from '../../components/AboutCardCompany/AboutCardCompany';

function CardCompany() {
    return (
        <Box>
            <Box sx={{
                width: '20.49vw',
                mt: '9.2vw',
                ml: '9.31vw',
            }}>
                <NameCardCompany />
            </Box>
            <Box sx={{
                width: '20.49vw',
                ml: '9.31vw',
                mb: '8.36vw',
            }}>
                <AboutCardCompany />
            </Box>
        </Box >
    );
}

export default CardCompany;