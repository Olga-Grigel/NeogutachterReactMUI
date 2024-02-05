import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowFAQ from '../../images/ArrowFAQ.svg';
import Link from '@mui/material/Link';

function CardFAQ({ text }) {
    return (
        <Link href="#" sx={{
            p: '14px 28px',
            textDecoration: 'none',
            boxSizing: 'border-box',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '16px',
            background: '#FFF',
        }}>
            <Typography
                sx={{
                    maxWidth: {
                        mobileL: '87%',
                        mobileXS: '80%',
                    },
                    letterSpacing: 'normal',
                    textWrap: 'wrap',
                    color: '#777',
                    fontFamily: "Lexend Deca",
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '32px',
                }}>
                {text}
            </Typography>
            <Box
                sx={{
                    backgroundImage: `URL(${ArrowFAQ})`,
                    width: '24px',
                    color: 'white',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    ml: '28px',
                }}>
            </Box>
        </Link>
    );
}

export default CardFAQ;