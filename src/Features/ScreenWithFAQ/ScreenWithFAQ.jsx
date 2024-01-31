import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardFAQ from '../../components/CardFAQ/CardFAQ'

function ScreenWithFAQ() {
    return (
        <Box
            sx={{
                p: {
                    mobileMS: '5.55vw 10.21vw',
                    mobileXS: '15.93vw 5.31vw'
                },

            }}
        >
            <Box
                sx={{
                    p: {
                        mobileM: '4.44vw 8.89vw',
                        mobileXS: '6.37vw 20px 12.74vw'
                    },
                    backgroundColor: '#DBFF00',
                    borderRadius: {
                        mobileMS: '2.22vw',
                        mobileXS: '6.37vw'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        width: {
                            mobileMS: '47.85vw',
                            mobileXS: '100%',
                        },
                        letterSpacing: {
                            mobileMS: '0.07px',
                            mobileXS: '-0.4px',
                        },
                        textAlign: 'center',
                        textWrap: 'wrap',
                        color: '#393939',
                        fontFamily: "Lexend Deca",
                        fontSize: {
                            mobileMS: '2.77vw',
                            mobileXS: '5.57vw',
                        },
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: {
                            mobileMS: '3.89vw',
                            mobileXS: '8.49vw',
                        },
                        mb: '40px'
                    }}>
                    Neogutachter.de FAQ – frequently asked questions
                </Typography>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}>
                    <CardFAQ text={'Was macht ein Kfz-Gutachter?'} />
                    <CardFAQ text={'Wann benötigt man einen Kfz-Gutachter?'} />
                    <CardFAQ text={'Wer kann den Kfz-Gutachter beauftragen?'} />
                    <CardFAQ text={'Wann sollte man einen Kfz-Gutachter hinzuziehen?'} />
                    <CardFAQ text={'Unfallgeschädigter, wann ist man Unfallgeschädigter?'} />
                    <CardFAQ text={'Wie vereinbart man einen Termin mit einem Kfz-Gutachter?'} />
                    <CardFAQ text={'Wo wird das Fahrzeug besichtigt?'} />
                </Box>


            </Box>

        </Box>


    );
}

export default ScreenWithFAQ;