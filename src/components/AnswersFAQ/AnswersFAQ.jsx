import { Typography, Box } from '@mui/material';

function AnswersFAQ({ text, isSelected }) {
    return (
        <Box className={isSelected? "selected":""}
            sx={{
                display: 'none',
                mt: '10px',
                p: '14px 28px',
                boxSizing: 'border-box',
                width: '100%',
                justifyContent: 'space-between',
                borderRadius: '16px',
                background: '#FFF',
                '&.selected': {
                    display: 'flex'
                }
            }}
        >
            <Typography
                sx={{

                }}
            >
                {text}
            </Typography >
        </Box>


    );
}

export default AnswersFAQ;
