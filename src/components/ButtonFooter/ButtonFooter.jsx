import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function ButtonFooter({ textButton, background, color, endIcon, border, startIcon }) {
    return (
        <Button endIcon={endIcon} startIcon={startIcon}
            sx={{
                backgroundColor: { background },
                color: { color },
                borderRadius: '99px',
                border: { border },
                boxSizing: 'border-box',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                padding: '11px 16px 11px 18px',
                textTransform: 'none',
            }}
        ><Typography
            sx={{
                letterSpacing: 'normal',
                margin: 0,
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '30px',
                // display: 'inline-block',
            }}>
                {textButton}
            </Typography>

        </Button>
    );
}

export default ButtonFooter;