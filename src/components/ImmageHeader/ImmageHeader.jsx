import './ImmageHeader.css';
import Box from '@mui/material/Box';

function ImmageHeader({ path }) {
    return (
        <Box
            sx={{
                height: '100%',
                borderRadius: '34.785px',
                overflow: 'hidden',
                transform: ' skewX(-10deg)',
                display: 'flex',
                justifyContent: 'center',
                filter: 'drop-shadow(0px 17.393px 26.089px rgba(48, 49, 51, 0.10)) drop-shadow(0px 0px 1.087px rgba(48, 49, 51, 0.05)) drop-shadow(17.393px 17.393px 52.178px rgba(0, 0, 0, 0.15))'
            }}
        >
            <img className="containwithimmage__immage" src={path} alt="immage" />
        </Box >
    );
}

export default ImmageHeader;