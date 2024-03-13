import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
function ButtonFilter({ textButton, onClick, isSelected }) {

    return (
        <Button onClick={onClick} className={isSelected? "selected":""}
            sx={{
                p: '10px 24px 10px 24px',
                borderRadius: '32px',
                backgroundColor: '#EFEFEF',
                color: '#9A9A9A',
                ':hover': {
                    bgcolor: '#393939',
                    color: '#DBFF00',
                },
                '&.selected': {
                    bgcolor:'#393939',
                    color:'#DBFF00'
                }
            }}
        >
            <Typography
                sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '28px',
                    textTransform: 'none',
                    verticalAlign: 'top',
                    border: 'none'
                }}>
                {textButton}
            </Typography>

        </Button>


    );
}

export default ButtonFilter;