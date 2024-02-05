import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBlog from '../../images/ArrowBlog.svg';
import Link from '@mui/material/Link';

function CardArticle({ text }) {
    return (
        <Box href="#" sx={{
            p: '28px',
            backgroundColor: '#EFEFEF',
            borderRadius: '28px',
        }}>
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    textWrap: 'wrap',
                    color: '#545454',
                    fontFamily: "Lexend Deca",
                    fontSize: {
                        mobileMS: '26px',
                        mobileXS: '5.57vw',
                    },
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: {
                        mobileMS: '36px',
                        mobileXS: '8.49vw',
                    },
                    mb: '82px',
                }}>
                {text}
            </Typography>


            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>

                <Button sx={{
                    backgroundColor: '#DBFF00',
                    borderRadius: '16px',
                    fontFamily: "Lexend Deca",
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '20px',
                    p: '4px 12px',
                    boxSizing: 'border-box',
                    color: '#393939',
                    textTransform: 'none',
                    minWidth: '61px',
                    height: '28px',
                }}>Tipps</Button>
                <Link href="#" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration: 'none',
                    gap: '8px',
                }}>
                    <Typography
                        sx={{
                            textDecoration: 'none',
                            color: '#0075FF',
                            letterSpacing: 'normal',
                            fontFamily: "Inter",
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '20px',
                        }}>
                        Weiterlesen
                    </Typography>
                    <img src={ArrowBlog} alt="ArrowBlog" />
                </Link>
            </Box>
        </Box>
    );
}

export default CardArticle;