import { Typography } from '@mui/material';
import Link from '@mui/material/Link';


function LinkFooter({ text }) {
    return (
        <Link href="#"
            sx={{
                color: '#777777',
                textDecoration: 'none',
            }}
        >
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: {
                        mobileMS: '14px',
                        mobileXS: '3.72vw',
                    },
                    lineHeight: {
                        mobileMS: '20px',
                        mobileXS: '5.31vw',
                    },
                }}>
                {text}
            </Typography>
        </Link>
    );
}

export default LinkFooter;