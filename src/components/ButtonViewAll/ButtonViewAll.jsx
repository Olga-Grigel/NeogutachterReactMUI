import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function ButtonViewAll({ textButton, background, colorText, endIcon }) {
    return (
        <Button endIcon={endIcon}
            sx={{
                p: '10px 24px 10px 24px',
                borderRadius: '32px',
                backgroundColor: '#DBFF00',
                color: '#393939',
                ':hover': {
                    bgcolor: '#EFEFEF',
                },
            }}
        >
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    verticalAlign: 'top',
                    border: 'none'
                }}>
                {textButton}
            </Typography>

        </Button>


    );
}

export default ButtonViewAll;