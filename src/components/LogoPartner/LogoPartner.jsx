// import Box from '@mui/material/Box';
import './LogoPartner.css'

function LogoPartner({ props }) {
    return (
        // <Box
        //     sx={{
        //         display: 'flex',
        //         height: '9.72vw',
        //         width: '20.83vw',
        //         background: '#fff',
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //     }}>
        <img src={props} className='logopartner' alt='logopartner' />
        // </Box>
    )
}

export default LogoPartner