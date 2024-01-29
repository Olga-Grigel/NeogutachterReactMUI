import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PhoneButton from '../../images/PhoneButton.svg';
import './ScreenWithPhone.css'

function ScreenWithPhone() {
    return (
        <Box
            sx={{
                pt: {
                    mobileMS: '90px',
                    mobileXS: '110px'
                },
                pb: {
                    mobileMS: '103px',
                    mobileXS: '116px'
                },
                width: {
                    sm: '50%',
                    mobileXS: '89%'
                },
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Typography
                sx={{
                    letterSpacing: '0.07px',
                    textAlign: 'center',
                    textWrap: 'wrap',
                    color: '#393939',
                    fontFamily: "Lexend Deca",
                    fontSize: {
                        mobileL: '2.78vw',
                        mobileMS: '26px',
                        mobileXS: '6.9vw',
                    },
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: {
                        mobileL: '3.89vw',
                        mobileMS: '36px',
                        mobileXS: '9.56vw',
                    },
                }}>
                Du möchtest deinen Gutachter direkt per Telefon bestellen?
            </Typography>
            <Typography
                sx={{
                    letterSpacing: '0.09px',
                    textAlign: 'center',
                    textWrap: 'wrap',
                    color: '#393939',
                    fontFamily: "Lexend Deca",
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '32px',
                    mt: '16px',
                    mb: '26px'
                }}>
                Jetzt anrufen und wir vermitteln dir direkten den besten Gutachter.
            </Typography>
            <Button sx={{
                p: '16px 32px',
                boxSizing: 'border-box',
                width: '239px',
                backgroundColor: '#0075FF',
                borderRadius: '99px',
                boxShadow: '0px 8px 16px 0px rgba(48, 49, 51, 0.10), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)',
                alignItems: 'center',
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '30px',
                gap: '8px',
            }}>
                <img src={PhoneButton} className="phoneButton" alt='phoneButton' />
                0160/4873888
            </Button>
        </Box >
    );
}

export default ScreenWithPhone;