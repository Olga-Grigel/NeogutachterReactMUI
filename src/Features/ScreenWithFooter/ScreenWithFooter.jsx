

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonFooter from '..//../components/ButtonFooter/ButtonFooter';
import IconCursor from '../../images/IconCursor.svg';
import PhoneBlue from '../../images/PhoneBlue.svg';
import '../ScreenWithFooter/ScreenWithFooter.css';
import logo from '../../images/logo.svg';
import LinkFooter from '../../components/LinkFooter/LinkFooter';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import IconMedia from '../../components/IconMedia/IconMedia'


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
                    p: {
                        xs: '93.5px 0',
                        mobileXS: '63.5px 0 83.5px'
                    },
                    m: {
                        sm: '0 146px',
                        mobileXS: '0 20px'
                    },
                    borderBottom: '1px solid #D3D3D3',
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
                        flexDirection:
                        {
                            mobileL: 'row',
                            mobileXS: 'column'
                        },
                        justifyContent: 'space-between',
                        p: {
                            sm: '60px 146px 47px',
                            mobileXS: '48px 20px'
                        }

                    }}>
                    <img src={logo} className='footer__logo' alt='logo' />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection:
                            {
                                mobileL: 'row',
                                mobileXS: 'column'
                            },
                            justifyContent: 'space-between',
                            gap:
                            {
                                mobileL: '32px',
                                mobileXS: '8px'
                            },

                        }}>
                        <LinkFooter text={'Über Uns'} />
                        <LinkFooter text={'Impressum'} />
                        <LinkFooter text={'Kontakt'} />
                        <LinkFooter text={'Datenschuzerklärung'} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection:
                        {
                            mobileL: 'row',
                            mobileXS: 'column'
                        },
                        justifyContent: 'space-between',
                        p: {
                            sm: '0 146px 107px',
                            mobileXS: '0 20px 71px'
                        }
                    }}>
                    <Typography
                        sx={{
                            letterSpacing: 'normal',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#777777',
                            mb: {
                                mobileL: '0',
                                mobileXS: '48px'
                            }
                        }}
                    >Neogutachter.de Ⓒ 2022, alle Rechte vorbehalten.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            gap: '32px',

                        }}>
                        <IconMedia path={twitter} name={'twitter'} />
                        <IconMedia path={facebook} name={'facebook'} />
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default ScreenWithFooter;