import './ImageHeader.css';
import Box from '@mui/material/Box';

function ImageHeader({ path }) {
    return (
        <Box
            sx={{
                height: '100%',
                borderRadius: {
                    xs: '34.785px',
                    mobileXS: '18.158px',
                },
                overflow: 'hidden',
                transform: ' skewX(-10deg)',
                display: 'flex',
                justifyContent: 'center',
                filter: {
                    mobileM: 'drop-shadow(0px 17.393px 26.089px rgba(48, 49, 51, 0.10)) drop-shadow(0px 0px 1.087px rgba(48, 49, 51, 0.05)) drop-shadow(17.393px 17.393px 52.178px rgba(0, 0, 0, 0.15))',
                    mobileXS: 'drop-shadow(0px 9.079px 13.618px rgba(48, 49, 51, 0.10)) drop-shadow(0px 0px 0.567px rgba(48, 49, 51, 0.05)) drop-shadow(6.809px 6.809px 18.158px rgba(0, 0, 0, 0.15))'
                },
            }}
        >
            <img className="containwithimage__image" src={path} alt="img" />
        </Box >
    );
}

export default ImageHeader;