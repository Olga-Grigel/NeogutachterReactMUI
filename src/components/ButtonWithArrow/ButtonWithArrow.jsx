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
                padding: {
                    mobileL: '16px 20px 16px 24px',
                    mobileXS: '12px 20px 12px 24px'
                },
                marginTop: {
                    mobileL: '27px',
                    mobileXS: '26px'
                },
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
                    mobileL: '12px',
                    mobileMS: '16px',
                    mobileXS: '12px'
                },
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: {
                    mobileL: '30px',
                    mobileXS: '28px'
                },
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
                        mobileL: '28px',
                        mobileXS: '24px'
                    },
                    height: {
                        lg: '32px',
                        mobileL: '28px',
                        mobileXS: '24px'
                    },
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