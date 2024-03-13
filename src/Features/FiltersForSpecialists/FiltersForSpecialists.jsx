import Box from '@mui/material/Box';
import ButtonFilter from '../../components/ButtonFilter/ButtonFilter';
import blackArrow from '../../images/BlackArrow32x32.svg';
import ButtonViewAll from '../../components/ButtonViewAll/ButtonViewAll';
import { specialists } from '../../utils/constants';
import { useState } from 'react';

function FiltersForSpecialists({ textButton, setArraySpecialists }) {
    
const[selected, setSelected] = useState("All")

    function arrow() {
        return (<img src={blackArrow} className='blackArrow' alt='blackArrow' />)
    }
    function clickButtonAll(evt) {
        setArraySpecialists(specialists)
        setSelected("All")
    };

    function clickButtonStadt(evt,stadt) {
        const resultArray = specialists.filter((ojectAboutSpecialist) => ojectAboutSpecialist.address.includes(stadt));
        setArraySpecialists(resultArray)
        setSelected(stadt)
    }
     
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
                <ButtonFilter textButton={'All'} isSelected={selected==="All"} onClick={(evt) => {clickButtonAll(evt)}}/>
                {
                    textButton.map((value, index) => {
                       
                        return (
                            <ButtonFilter key={index} isSelected={selected===value.stadt} textButton={value.stadt} onClick={(evt) => {clickButtonStadt(evt, value.stadt)}} />)
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