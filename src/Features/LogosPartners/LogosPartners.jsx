import LogoPartner from '../../components/LogoPartner/LogoPartner'
import Box from '@mui/material/Box';


function LogosPartners(props) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    sm: 'repeat(4, 20.83vw)',
                    xs: 'repeat(3, 20.83vw)',
                    mobileM: 'repeat(2, 20.83vw)',
                    mobileXS: 'repeat(1, 20.83vw)',
                },
                gap: '1.94vw',
                justifyItems: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
            <Box
                sx={{
                    display: 'block'
                }}><LogoPartner props={props.item.img1} /></Box>
            <Box
                sx={{
                    display: {
                        mobileM: 'block',
                        mobileXS: 'none',
                    }
                }}><LogoPartner props={props.item.img2} /></Box>
            <Box
                sx={{
                    display: {
                        xs: 'block',
                        mobileXS: 'none',
                    }
                }}><LogoPartner props={props.item.img3} /></Box>
            <Box
                sx={{
                    display: {
                        sm: 'block',
                        mobileXS: 'none',
                    }
                }}><LogoPartner props={props.item.img4} /></Box>
        </Box>
    )
}

export default LogosPartners