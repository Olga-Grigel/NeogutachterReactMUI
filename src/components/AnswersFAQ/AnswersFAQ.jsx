import { Typography, Box } from '@mui/material';

function AnswersFAQ({ text, display }) {
    return (
        <Box
            sx={{
                display: { display },
                mt: '10px',
                p: '14px 28px',
                boxSizing: 'border-box',
                width: '100%',
                justifyContent: 'space-between',
                borderRadius: '16px',
                background: '#FFF',
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
