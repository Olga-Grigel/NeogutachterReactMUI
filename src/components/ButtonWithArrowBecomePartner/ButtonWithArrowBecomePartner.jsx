import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowButton from "../../images/ArrowButtonHeader.svg";

function ButtonWithArrowBecomePartner({ textButton }) {
    return (
        <Button
            sx={{
                backgroundColor: '#0075FF',
                borderRadius: '32px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 20px 16px 24px',
                border: 'none',
                textTransform: 'none',
                ':hover': {
                    bgcolor: '#393939',
                },
            }}
        ><Typography
            sx={{
                letterSpacing: 'normal',
                margin: 0,
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '30px',
                marginRight: '8px',
                display: 'inline-block',
            }}>
                {textButton}
            </Typography>
            <Box
                sx={{
                    backgroundImage: `URL(${ArrowButton})`,
                    color: 'white',
                    width: '32px',
                    height: '32px',
                    display: 'inline-block',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                }}>
            </Box>
        </Button>
    );
}

export default ButtonWithArrowBecomePartner;