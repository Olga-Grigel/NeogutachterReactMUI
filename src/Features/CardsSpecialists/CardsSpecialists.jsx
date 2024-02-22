import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import specialist from '../../images/spezialist.png';
import location from '../../images/location.jpg';
import eye from '../../images/eye.svg';
import link from '../../images/link.svg';
import like from '../../images/like.svg';
import './CardsSpecialists.css';

function FiltersForSpecialists({ company, address, className }) {
    return (
        <Box className={className}
            sx={{
                borderRadius: '20px',
                width: '266px',
                boxShadow: '0px 4px 8px 0px #3031331A',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `URL(${specialist})`,
                    backgroundRepeat: 'no-repeat',
                    height: '175px',
                    width: '100%',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                }}
            >
            </Box>
            <Box
                sx={{
                    p: '20px 20px 0px'

                }}
            >
                <Typography sx={{
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '26px',
                    mb: '16px',
                    color: '#393939',
                }}>
                    {company}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: '8px'
                    }}
                >
                    <img src={location} className='immage-location' alt='location' />
                    <Typography sx={{
                        letterSpacing: 'normal',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '20px',
                        mb: '20px',
                        color: '#393939',
                    }}>{address}</Typography>
                </Box>
                <Box
                    sx={{
                        pl: '4px',
                        pr: '4px',
                        borderBottom: '1px solid #E0E0E0'

                    }}
                >
                </Box>
            </Box>
            <Box
                sx={{
                    p: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    gap: '12px'
                }}>
                    <img src={eye} className='icon-card-filter' alt='eye' />
                    <img src={link} className='icon-card-filter' alt='link' />
                    <img src={like} className='icon-card-filter' alt='like' />
                </Box>

                <Typography sx={{
                    color: '#777777',
                    letterSpacing: 'normal',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '20px',
                }}>204 Views</Typography>
            </Box>
        </Box>


    );
}

export default FiltersForSpecialists;