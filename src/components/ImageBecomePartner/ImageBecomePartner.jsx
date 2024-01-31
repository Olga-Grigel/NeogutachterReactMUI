import './ImageBecomePartner.css';
import Box from '@mui/material/Box';

function ImageBecomePartner({ path }) {
    return (
        <Box
            sx={{
                height: '100%',
                borderRadius: '2.92vw',
                overflow: 'hidden',
                transform: ' skewX(-10.5deg)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <img className="containwithimage__image" src={path} alt="img" />
        </Box >
    );
}

export default ImageBecomePartner;