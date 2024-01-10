import LogoPartner from '../../components/LogoPartner/LogoPartner'
import Box from '@mui/material/Box';


function LogosPartners(props) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 20.83vw)',
                gap: '1.94vw',
                justifyItems: 'center',
                alignItems: 'center',
                border: '1px solid red',
                alignContent: 'center',
                justifyContent: 'center',
                background: '#F5F5F5',
            }}>
            <LogoPartner props={props.item.img1} />
            <LogoPartner props={props.item.img2} />
            <LogoPartner props={props.item.img3} />
            <LogoPartner props={props.item.img4} />
        </Box>
    )
}

export default LogosPartners