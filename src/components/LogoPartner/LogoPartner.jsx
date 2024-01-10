import Box from '@mui/material/Box';


function LogoPartner({ props }) {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '9.72vw',
                width: '20.83vw',
                border: '1px solid red',
                background: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <img src={props} alt='logopartner' />
        </Box>
    )
}

export default LogoPartner