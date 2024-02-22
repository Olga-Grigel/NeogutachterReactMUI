import Box from '@mui/material/Box';
import ButtonFilter from '../../components/ButtonFilter/ButtonFilter';
import blackArrow from '../../images/BlackArrow32x32.svg';
import ButtonViewAll from '../../components/ButtonViewAll/ButtonViewAll';
import { specialists } from '../../utils/constants';
import { useState } from 'react';

function FiltersForSpecialists({ textButton, setArraySpecialists }) {

    function arrow() {
        return (<img src={blackArrow} className='blackArrow' alt='blackArrow' />)
    }
    function clickButtonAll() {
        setArraySpecialists(specialists)
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                overflowX: {
                    xs: 'hidden',
                    mobileXS: 'scroll'
                },
                whiteSpace: 'nowrap',
                mb: {
                    mobileL: '40px',
                    mobileXS: '36px'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    gap: '16px'
                }}
            >
                <ButtonFilter textButton={'All'} onClick={clickButtonAll} />
                {
                    textButton.map((filter, index) => {

                        function clickButtonStadt(el) {
                            const resultArray = specialists.filter((ojectAboutSpecialist) => ojectAboutSpecialist.address.includes(filter.stadt));
                            setArraySpecialists(resultArray)
                            console.log(el)
                        };
                        return (
                            <ButtonFilter key={index} textButton={filter.stadt} onClick={() => clickButtonStadt(this)} />)
                    })
                }
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'end',

                }}
            >
                <ButtonViewAll textButton={`View all`} endIcon={arrow()} />
            </Box>
        </Box>


    );
}

export default FiltersForSpecialists;