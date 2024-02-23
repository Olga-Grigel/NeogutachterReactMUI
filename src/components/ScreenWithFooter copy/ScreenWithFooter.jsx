import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonFooter from '../ButtonFooter/ButtonFooter';
import IconCursor from '../../images/IconCursor.svg';
import PhoneBlue from '../../images/PhoneBlue.svg';
import '../ScreenWithFooter/ScreenWithFooter.css';
import logo from '../../images/logo.svg';
import LinkFooter from '../LinkFooter/LinkFooter'


function ScreenWithFooter() {

    function addIconCursor() {
        return (<img src={IconCursor} className='footer__iconbutton' alt='Icon Cursor' />)
    }

    function addIconPhoneBlue() {
        return (<img src={PhoneBlue} className='footer__iconbutton' alt='Icon Phone Blue' />)
    }

    return (
        <Box
            sx={{
                backgroundColor: '#EEEEEE',
            }}>
            <Box
                sx={{
                    m: 'auto',
                    pt: {
                        mobileMS: '93.5px',
                        mobileXS: '63.5px'
                    },
                    pb: {
                        mobileMS: '93.5px',
                        mobileXS: '83.5px'
                    },
                    borderBottom: '1px solid #D3D3D3',
                    width: '79.72vw'
                }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        letterSpacing: 'normal',
                        margin: 0,
                        fontFamily: 'Lexend Deca',
                        fontSize:
                        {
                            mobileM: '40px',
                            mobileMS: '5.9vw',
                            mobileXS: '6.9vw'
                        },
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: {
                            mobileMS: '56px',
                            mobileXS: '9.56vw'
                        },
                    }}
                >Kfz-Gutachter finden!</Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            mobileM: 'row',
                            mobileXS: 'column'
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: {
                            mobileM: '32px',
                            mobileXS: '24px'
                        },
                        mt: '32px'
                    }}>
                    <ButtonFooter textButton={'Online anfrage'} background={'#0075FF'} color={'#FFFFFF'} startIcon={addIconCursor()} border={'1px solid #0075FF'} />
                    <ButtonFooter textButton={'0160/4873888'} background={'#EEEEEE'} color={'#0075FF'} startIcon={addIconPhoneBlue()} border={'1px solid #0075FF'} />
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: '60px 146px 47px'

                    }}>
                    <img src={logo} className='footer__logo' alt='logo' />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '32px',

                        }}>
                        <LinkFooter text={'Über Uns'} />
                        <LinkFooter text={'Impressum'} />
                        <LinkFooter text={'Kontakt'} />
                        <LinkFooter text={'Datenschuzerklärung'} />
                    </Box>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            letterSpacing: 'normal',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}
                    >Neogutachter.de Ⓒ 2022, alle Rechte vorbehalten.
                    </Typography>
                    <Box>
                        <img src={tvitter} className='footer__mediaicons' alt='tvitter' />
                        <img src={facebook} className='footer__mediaicons' alt='facebook' />
                    </Box>
                </Box>
            </Box>

        </Box>


    );
}

export default ScreenWithFooter;