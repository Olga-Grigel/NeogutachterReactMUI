import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowButton from "../../images/ArrowButtonHeader.svg";

function ButtonWithArrow() {
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
                marginTop: '27px',
                border: 'none',
                textTransform: 'none',
                ml: '-7px'
            }}
        ><Typography
            sx={{
                letterSpacing: 'normal',
                margin: 0,
                fontFamily: 'Inter',
                fontSize: {
                    lg: '18px',
                    md: '12px',
                    sm: '10px',
                    xs: '8px'
                },
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '30px',
                marginRight: '8px',
                display: 'inline-block',
            }}>
                Gutachter kostenlos anfragen
            </Typography>
            <Box
                sx={{
                    backgroundImage: `URL(${ArrowButton})`,
                    color: 'white',
                    width: {
                        lg: '32px',
                        md: '29px',
                        sm: '26px',
                        xs: '23px'
                    },
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

export default ButtonWithArrow;