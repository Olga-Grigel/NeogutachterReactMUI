import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FiltersForSpecialists from '../../Features/FiltersForSpecialists/FiltersForSpecialists';
import CardSpecialists from '../../Features/CardsSpecialists/CardsSpecialists';
import CarouselSpecialists from '../../Features/CarouselSpecialists/CarouselSpecialists'
import { specialists } from '../../utils/constants';
import { filterSpecialists } from '../../utils/constants';
import { useState } from 'react';


function ScreenWithSelectionOfSpecialists() {
    const [arraySpecialists, setArraySpecialists] = useState(specialists)

    return (
        <Box
            sx={{
                pl: {
                    lg: '145px',
                    mobileXS: '20px',
                },
                pr: {
                    lg: '145px',
                    mobileS: '20px',
                    mobileXS: '0',
                },
                pb: {
                    mobileL: '100px',
                    mobileXS: '0',
                }
            }}
        >
            <Typography
                sx={{
                    letterSpacing: {
                        mobileMS: 'normal',
                        mobileXS: '-0.5px',
                    },
                    fontFamily: 'Lexend Deca',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: {
                        mobileL: '2.78vw',
                        mobileMS: '4.78vw',
                        mobileXS: '6.9vw',
                    },
                    lineHeight: {
                        mobileL: '3.89vw',
                        mobileMS: '6.89vw',
                        mobileXS: '9.56vw',
                    },
                    mt: {
                        mobileMS: '80px',
                        mobileXS: '48px',
                    },
                    mb: '36px',
                }}>
                Eine Auswahl unserer Spezialisten
            </Typography>

            <Box
                sx={{

                }}>
                <FiltersForSpecialists textButton={filterSpecialists} setArraySpecialists={setArraySpecialists} />
            </Box>

            <Box sx={{
                height: '100%',
                position: 'relative',
                width: '100%',
                display: {
                    mobileL: 'none',
                    mobileXS: 'block'
                },
            }}>
                <CarouselSpecialists arraySpecialists={arraySpecialists} />
            </Box>
            <Box sx={{
                display: {
                    mobileL: 'grid',
                    mobileXS: 'none'
                },
                gridTemplateColumns: {
                    lg: 'repeat(4, 18.47vw)',
                    xs: 'repeat(3, 30vw)',
                    mobileXS: 'repeat(2, 40vw)',
                },
                gap: '1.94vw',
                justifyItems: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
            }
            } >

                {

                    arraySpecialists.map((article, personIndex) => { return (<CardSpecialists key={personIndex} company={article.company} address={article.address} />) })
                }

            </Box>
        </Box>


    );
}

export default ScreenWithSelectionOfSpecialists;